<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\UserRepository;
use App\Repository\TokenRepository;
use App\Serializer\TokenSerializer;
use App\Entity\User;
use App\Entity\Token;
use App\Service\AuthenticationService;
use App\Service\LoginService;

class AuthenticationController extends AbstractController
{
    /**
     * @Route("/login", methods={"POST"})
     */
    public function login(
        Request $request,
        UserRepository $userRepository,
        TokenRepository $tokenRepository,
        TokenSerializer $tokenSerializer,
        AuthenticationService $authentication,
        LoginService $loginService
        ): JsonResponse {
        
        $post = json_decode($request->getContent(), true);
        $user = $loginService->login($post['email'], $post['password']);

        if(!$user['isValid']) {
            return $this->json(["success"=>false], JsonResponse::HTTP_UNAUTHORIZED);
        };

        $token = $tokenRepository->create($user['user']);
        //$authentication->deleteInvalidToken($user);
        
        return new JsonResponse(
            $tokenSerializer->serialize($token),
            JsonResponse::HTTP_OK,
            [],
            true
        );
    }

    /**
     * @Route("/logout", methods={"DELETE"})
     */

    public function deleteToken(
        Request $request,
        TokenRepository $tokenRepository,
        TokenSerializer $tokenSerializer
    ): JsonResponse {
        $token = $tokenSerializer->deserialize($request->getContent());
        $tokenExists = $tokenRepository->findOneBy(
            [
                'value' => $token->getValue()
            ]
        );

        if($tokenExists === null) {
            return $this->json(["tokenDeleted"=>false], JsonResponse::HTTP_UNPROCESSABLE_ENTITY);
        }
        
        $tokenRepository->deleteToken($tokenExists);

        return new JsonResponse(
            json_encode(["tokenDeleted"=>true]),
            JsonResponse::HTTP_OK,
            [],
            true
        );
    }
}