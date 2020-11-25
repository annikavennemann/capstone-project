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
}