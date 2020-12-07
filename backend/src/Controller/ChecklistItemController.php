<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use App\Service\AuthenticationService;
use App\Serializer\ChecklistItemSerializer;
use App\Repository\ChecklistItemRepository;

class ChecklistItemController extends AbstractController
{
    /**
     * @Route("/checklist-item", methods={"Post"})
     */
    public function addChecklistItem(
        Request $request,
        ChecklistItemRepository $ChecklistItemRepository, 
        ChecklistItemSerializer $ChecklistItemSerializer,
        AuthenticationService $authentication
    ): JsonResponse {

        $checklistItem = $ChecklistItemSerializer->deserialize($request->getContent());
        
        $ChecklistItemRepository->save($checklistItem);

        return new JsonResponse(
            $ChecklistItemSerializer->serialize($checklistItem),
            JsonResponse::HTTP_OK,
            [],
            true
        );
    }
}
