<?php

namespace App\Serializer;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use App\Entity\User;
use App\Serializer\UserChecklistSerializer;

class UserSerializer {
    private $userChecklistSerializer;

    public function __construct(
        UserChecklistSerializer $userChecklistSerializer) {
        $this->userChecklistSerializer = $userChecklistSerializer;
    }

    private function setArray($user): array {
        
        $userAsArray = [];
        $userAsArray[] = [
            'id' => $user->getId(),
            'firstname' => $user->getFirstname(),
            'lastname' => $user->getLastname(),
            'email' => $user->getEmail(),
            'password' => $user->getPassword(),
            'startdate' => $user->getStartdate(),
            'userChecklist' => $this->userChecklistSerializer->getArray($user)
        ];
        
        return $userAsArray;
    }

    public function serialize($users) {
        if (is_array($users)) {
            foreach($users as $user) {
                $this->setArray($user);
            }
        } else {
            $this->setArray($users);
        }
        
        return \json_encode($this->setArray($users));
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