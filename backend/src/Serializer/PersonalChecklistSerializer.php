<?php 

namespace App\Serializer;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use App\Entity\ChecklistItem;


class PersonalChecklistSerializer {
    private function setArray($checklist): object {
        
        $this->checklistItemsAsArray[] = [
            'id' => $checklist->getChecklistItem()->getId(),
            'category' => $checklist->getChecklistItem()->getCategory(),
            'text' => $checklist->getChecklistItem()->getText(),
            'checked' => $checklist->getIsChecked()
        ];
        
        return($this);
    }

    public function serialize($checklistItems){
        if (is_array($checklistItems)) {
            foreach($checklistItems as $item) {
                $this->setArray($item);
            }
        } else {
            $this->setArray($checklistItems);
        }
        
        return \json_encode($this->checklistItemsAsArray);
    }
}