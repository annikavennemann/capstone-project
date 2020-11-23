<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Serializer\SerializerInterface;
use App\Repository\ChecklistRepository;
use App\Entity\Checklist;

class ChecklistController extends AbstractController
{
    /**
     * @Route("/checklist", methods={"POST"})
     */
    public function create(
        Request $request, 
        ChecklistRepository $repository, 
        SerializerInterface $serializer
    ): JsonResponse {
        $checklist = $serializer->deserialize($request->getContent(), Checklist::class, 'json');
        
        $repository->save($checklist);

        return new JsonResponse(
            $serializer->serialize($checklist, 'json'),
            JsonResponse::HTTP_OK,
            [],
            true
        );
    }

}
