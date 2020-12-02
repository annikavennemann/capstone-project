<?php

namespace App\Serializer;

use App\Entity\Token;

class TokenSerializer {
    public function serialize($token) {

        return \json_encode([
            'value' => $token->getValue(),
            'validUntil' => $token->getValidUntil(),
            'userName' => $token->getUser()->getFirstName()
        ]);
    }
}