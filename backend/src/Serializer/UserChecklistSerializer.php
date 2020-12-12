<?php 

namespace App\Serializer;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use App\Entity\ChecklistItem;


class UserChecklistSerializer {
    private $responseJson = [];

    public function getArray($user) {
        
        $responseJson['checklistItems'] = [
            ChecklistItem::CATEGORY_DAY => [],
            ChecklistItem::CATEGORY_WEEK => [],
            ChecklistItem::CATEGORY_MONTH => [],
            ChecklistItem::CATEGORY_ONE_HUNDRED_DAYS => []
        ];

        $userChecklistItems = $user->getUserChecklistItems();
        $userChecklistArray = [];

        foreach($userChecklistItems as $userChecklistItem) {
            $category = $userChecklistItem->getChecklistItem()->getCategory();
            $responseJson['checklistItems'][$category] = [
                'text' => $userChecklistItem->getChecklistItem()->getText(),
                'isChecked' => $userChecklistItem->getIsChecked()
            ];
            $userChecklistArray[] = $responseJson;
        };
        
        return $userChecklistArray;
    }
}