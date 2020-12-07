<?php 

namespace App\Serializer;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use App\Entity\ChecklistItem;


class ChecklistItemSerializer {
    
    private function userArray($element): object {

        $this->elementAsArray[] = [
            'id' => $element->getId(),
            'category' => $element->getCategory(),
            'text' => $element->getText()
        ];
        return($this);
    }

    public function serialize($elements) {
        if (is_array($elements)) {
            foreach($elements as $element) {
                $this->userArray($element);
            }
        } else {
            $this->userArray($elements);
        }
        return \json_encode($this->elementAsArray);
    }
    
    public function deserialize($content) {
        
            $postData = \json_decode($content);
        
            $checklistItem = new ChecklistItem();
            $checklistItem->setCategory($postData->category);
            $checklistItem->setText($postData->text);
        
            return $checklistItem;
        }
        
    // @TODO: deserialize if array
    // public function deserialize($content) {
    //     $checklistItem = [];
        
    //     $checklistItems = \json_decode($content);
    //     foreach($checklistItems as $postData) {

    //             $item = new ChecklistItem();
    //             $item->setCategory($postData->category);
    //             $item->setText($postData->text);
                
    //             $checklistItem[] = $item;
    //     }  

    //     return $checklistItem;
    // }
}