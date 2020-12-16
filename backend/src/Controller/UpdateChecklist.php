<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use App\Service\AuthenticationService;
use App\Repository\UserChecklistItemsRepository;
use App\Serializer\UserChecklistSerializer;


class UpdateChecklist extends AbstractController {

     /**
     * @Route("/checklist/{id}", methods={"PUT"})
     */
    public function updateChecklist(  
        int $id,
        Request $request,
        AuthenticationService $authenticationService,
        UserChecklistItemsRepository $userChecklistItemsRepository
        ): JsonResponse 
    {
        //@TODO: in Service auslagern
            
        $user = $authenticationService->validateUser($request);

        if (!$user) {
            return $this->json(["sucess" => false], JsonResponse::HTTP_UNAUTHORIZED);
        }

        $foundChecklistItem = $userChecklistItemsRepository->find($id);

        if ($foundChecklistItem->getUser()->getId() !== $user->getId()){
            return $this->json(["sucess" => false], JsonResponse::HTTP_UNAUTHORIZED);
        }

        $newChecklistValue = \json_decode($request->getContent());
        $foundChecklistItem->setIsChecked($newChecklistValue->isChecked);

        $userChecklistItemsRepository->flushToDatabase($foundChecklistItem);

        return new JsonResponse(
            ['success' => true],
            JsonResponse::HTTP_OK
        );
    }
}