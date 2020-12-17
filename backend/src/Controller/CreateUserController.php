<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\UserRepository;
use App\Serializer\UserSerializer;
use App\Entity\User;
use App\Entity\UserChecklistItems;
use App\Repository\UserChecklistItemsRepository;
use App\Repository\ChecklistItemRepository;
use Doctrine\ORM\EntityManagerInterface;
use App\Service\AuthenticationService;
use App\Service\PasswordEncoder;


class CreateUserController extends AbstractController
{
    /**
     * @Route("/user", methods={"POST"})
     */

    public function createUserWithChecklist(
        Request $request,
        UserRepository $userRepository,
        UserSerializer $UserSerializer,
        UserChecklistItemsRepository $userChecklistItemsRepository,
        ChecklistItemRepository $checklistItemRepository,
        PasswordEncoder $passwordEncoder
    ): JsonResponse {
        
        {
            $user = $UserSerializer->deserialize($request->getContent());
            $emailExists = $userRepository->findBy(['email' => $user->getEmail()]);

            if(sizeof($emailExists) > 0) {
                return $this->json(['errors'=>'This E-Mail is already registered.'], JsonResponse::HTTP_UNPROCESSABLE_ENTITY);
            }

            $passwordEncoder->encode($user->getPassword(), $user);
            $userRepository->save($user);

            $checklist = $checklistItemRepository->findAll();
            
            //@TODO: foreach in Service auslagern
            
            foreach ($checklist as $checklistItem) {
                $userChecklistItem = new UserChecklistItems();
                $userChecklistItem->setUser($user);
                $userChecklistItem->setChecklistItem($checklistItem); 
                $userChecklistItem->setIsChecked(false);
                $user->addUserChecklistItem($userChecklistItem);

                $userChecklistItemsRepository->save($userChecklistItem); 
            }
            
            $em = $this->getDoctrine()->getManager();
            $em->flush();

            return new JsonResponse(
                $UserSerializer->serialize($user),
                JsonResponse::HTTP_OK,
                [],
                true
            );
        }
    }
}