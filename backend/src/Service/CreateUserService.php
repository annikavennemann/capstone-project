<?php 

namespace App\Service;

use Symfony\Component\HttpFoundation\Request;
use App\Repository\UserChecklistItemsRepository;
use App\Entity\UserChecklistItems;

class CreateUserService {
    private $repository;

    public function __construct(UserChecklistItemsRepository $repository) {
        $this->repository = $repository;
    }

    public function createChecklistItem(UserChecklistItem $checklist): object {
        foreach ($checklist as $checklistItem) {
            $userChecklistItem = new UserChecklistItems();
            $userChecklistItem->setUser($user);
            $userChecklistItem->setChecklistItem($checklistItem); 
            $userChecklistItem->setIsChecked(false);
            $user->addUserChecklistItem($userChecklistItem);

            $userChecklistItemsRepository->save($userChecklistItem); 
        }

        return $checklist;
    }
}