<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use App\Service\AuthenticationService;
use App\Repository\UserRepository;
use App\Repository\UserChecklistItemsRepository;
use App\Serializer\UserSerializer;
use App\Serializer\UserChecklistSerializer;
use App\Serializer\PersonalChecklistSerializer;
use App\Serializer\UpdateChecklistSerializer;
use App\Entity\User;


class GetUserChecklistController extends AbstractController {
    
    /**
     * @Route("/checklist", methods={"GET"})
     */
    public function index(  
        Request $request, 
        UserRepository $userRepository,
        AuthenticationService $authenticationService,
        UserSerializer $userSerializer,
        PersonalChecklistSerializer $personalChecklistSerializer
        ): JsonResponse 
    {
        
        $user = $authenticationService->validateUser($request);

        if (!$user) {
            return $this->json(["sucess" => false], JsonResponse::HTTP_UNAUTHORIZED);
        }

        $userSerializer->serialize($user);
        $userChecklistItems = $user->getUserChecklistItems()->toArray();
        
        return new JsonResponse(
            $personalChecklistSerializer->serialize($userChecklistItems),
            JsonResponse::HTTP_OK,
            [],
            true
        );
    }
}