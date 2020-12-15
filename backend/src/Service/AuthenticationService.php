<?php 

namespace App\Service;

use Symfony\Component\HttpFoundation\Request;
use App\Repository\TokenRepository;

class AuthenticationService {
    private $repository;

    public function __construct(TokenRepository $repository) {
        $this->repository = $repository;
    }

    public function isValid(Request $request): bool {
        $authHeader = $request->headers->get('Authorization');
        $tokenValue = substr($authHeader, strpos($authHeader, ' ')+1);

        $token = $this->repository->findOneBy([
            'value' => $tokenValue
        ]);

        $now = new \DateTime();
        return !is_null($token) && $now < $token->getValidUntil();
    }

    public function validateUser(Request $request): mixed {
        $authHeader = $request->headers->get('Authorization');
        $currentToken = substr($authHeader, strpos($authHeader, ' ')+1);
        
        if (!$currentToken) { 
            return null;
        }

        $foundToken = $this->repository->findOneBy(['value' => $currentToken]);

        if (!$foundToken) {
            return null;
        }

        $user = $foundToken->getUser();
        $today = new \Datetime();

        if ($foundToken->getValidUntil() < $today) {
            return null;
        }

        return $user;
    }

    public function deleteInvalidToken(object $user): void {
        $tokens = $user->getTokens();
        $today = new \Datetime();

        foreach ($tokens as $token) {
            if ($token->getValidUntil() < $today) {
                $this->repository->deleteToken($token);
            }
        }
    }
}