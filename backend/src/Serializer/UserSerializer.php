<?php

namespace App\Serializer;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use App\Entity\User;

class UserSerializer {
    
    private function userArray($element): object {

        $this->elementAsArray[] = [
            'id' => $element->getId(),
            'firstname' => $element->getFirstname(),
            'lastname' => $element->getLastname(),
            'email' => $element->getEmail(),
            'password' => $element->getPassword(),
            'startdate' => $element->getStartdate()
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

        $userObject = new User();
        $userObject->setFirstname($postData->firstname);
        $userObject->setLastname($postData->lastname);
        $userObject->setEmail($postData->email);
        $userObject->setPassword($postData->password);
        $date = date_create($postData->startdate);
        $userObject->setStartdate($date);

        return $userObject;
    }
    
}