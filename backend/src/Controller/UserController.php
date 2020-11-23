<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;
use App\Repository\UserRepository;
use App\Entity\User;

// @TODO: GET fixen

class UserController extends AbstractController
{
    /**
     * @Route("/user", methods={"GET"})
     */
    public function index(): JsonResponse {
        $user = $this->getDoctrine()->getRepository(User::class)->findAll();
        $response = [];

        foreach($user as $user) {
            $response[] = $user->toArray();
        }

        return new JsonResponse(
            $serializer->serialize($user, 'json'),
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
        UserRepository $repository, 
        SerializerInterface $serializer
    ): JsonResponse {
        $user = $serializer->deserialize($request->getContent(), User::class, 'json');
        
        $repository->save($user);

        return new JsonResponse(
            $serializer->serialize($user, 'json'),
            JsonResponse::HTTP_OK,
            [],
            true
        );
    }

}
