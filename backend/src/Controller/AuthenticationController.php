<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\UserRepository;
use App\Repository\TokenRepository;
use App\Serializer\TokenSerializer;
use App\Serializer\UserSerializer;
use App\Entity\User;
use App\Entity\Token;

class AuthenticationController extends AbstractController
{
    /**
     * @Route("/login", methods={"POST"})
     */
    public function login(
        Request $request,
        UserRepository $userRepository,
        TokenRepository $tokenRepository,
        tokenSerializer $tokenSerializer,
        UserSerializer $UserSerializer
        ): JsonResponse {
        
        $post = json_decode($request->getContent(), true);
        $user = $userRepository->findUser($post['email'], $post['password']);

        if (is_null($user)) {
            return $this->json(["success" => false], JsonResponse::HTTP_UNAUTHORIZED);
        }

        $token = $tokenRepository->create($user);
        
        return new JsonResponse(
            $tokenSerializer->serialize($token),
            JsonResponse::HTTP_OK,
            [],
            true
        );
    }
}