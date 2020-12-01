<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\UserRepository;
use App\Repository\TokenRepository;
use App\Serializer\UserSerializer;
use App\Serializer\TokenSerializer;
use App\Entity\User;
use App\Enitiy\Token;
use App\Service\AuthenticationService;


class UserController extends AbstractController
{

    /**
     * @Route("/user", methods={"GET"})
     */
    public function index(
        Request $request,
        UserRepository $userRepository,
        TokenRepository $tokenRepository,
        UserSerializer $userSerializer,
        TokenSerializer $tokenSerializer,
        AuthenticationService $authentication
    ): JsonResponse {
        
        if (!$authentication->isValid($request)) {
            return $this->json(["sucess" => false], JsonResponse::HTTP_UNAUTHORIZED);
        }
        
        //@TODO: find user by token
        //$user = $token->getUser()->getFirstName();
        //$post = json_decode($request->getContent(), true);
        //$user = $tokenRepository->findUser($post['userName']);
        
        $user = $userRepository->findAll();

        return new JsonResponse(
            $userSerializer->serialize($user),
            JsonResponse::HTTP_OK,
            [],
            true
        );
    }

    /**
     * @Route("/user", methods={"POST"})
     */
    public function create(
        Request $request, 
        UserRepository $userRepository, 
        UserSerializer $UserSerializer
    ): JsonResponse {
        
        $user = $UserSerializer->deserialize($request->getContent());
        
        $userRepository->save($user);

        return new JsonResponse(
            $UserSerializer->serialize($user),
            JsonResponse::HTTP_OK,
            [],
            true
        );
    }

}