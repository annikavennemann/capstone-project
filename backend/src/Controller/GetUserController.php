<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use App\Service\AuthenticationService;
use App\Repository\UserRepository;
use App\Serializer\GetUserSerializer;
use App\Entity\User;


class GetUserController extends AbstractController {

    /**
     * @Route("/user", methods={"GET"})
     */
    public function index(
        Request $request,
        UserRepository $userRepository,
        GetUserSerializer $getUserSerializer,
        AuthenticationService $authenticationService
    ): JsonResponse {

        $user = $authenticationService->validateUser($request);

        if (!$user) {
            return $this->json(["sucess" => false], JsonResponse::HTTP_UNAUTHORIZED);
        }

        $user = $userRepository->findBy(['id' => $user->getId()]);
        
        return new JsonResponse(
            $getUserSerializer->serialize($user),
            JsonResponse::HTTP_OK,
            [],
            true
        );
    }
}