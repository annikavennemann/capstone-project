<?php

namespace App\Serializer;

use App\Entity\Token;

class TokenSerializer {
    public function serialize($token) {

        return \json_encode(
            ['value' => $token->getValue(),
            'validuntil' => $token->getValiduntil(),]
        );
        
    }
}