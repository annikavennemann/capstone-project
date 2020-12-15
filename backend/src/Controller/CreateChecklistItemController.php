<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\ChecklistItemRepository;
use App\Serializer\ChecklistItemSerializer;
use App\Service\AuthenticationService;

class CreateChecklistItemController extends AbstractController
{
    /**
     * @Route("/checklist-item", methods={"Post"})
     */
    public function createChecklistItem(
        Request $request,
        ChecklistItemRepository $repository, 
        ChecklistItemSerializer $serializer,
        AuthenticationService $authentication
    ): JsonResponse {

        $checklistItem = $serializer->deserialize($request->getContent());
        
        $repository->save($checklistItem);

        return new JsonResponse(
            $serializer->serialize($checklistItem),
            JsonResponse::HTTP_OK,
            [],
            true
        );
    }
}
