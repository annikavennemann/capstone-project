<?php

namespace App\Entity;

use App\Repository\UserRepository;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\Security\Core\User\UserInterface;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=UserRepository::class)
 */
class User implements UserInterface
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $firstname;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $lastname;

    /**
     * @ORM\Column(type="string", length=255)
     * @Assert\NotBlank
     */
    private $email;

    /**
     * @ORM\Column(type="string", length=255)
     * @Assert\NotBlank
     * @Assert\Regex( pattern="/\d/", message = "Your password must contain at least one number.")
     */
    private $password;

    /**
     * @ORM\Column(type="date")
     */
    private $startdate;

    /**
     * @ORM\OneToMany(targetEntity=Token::class, mappedBy="user")
     */
    private $tokens;

    /**
     * @ORM\OneToMany(targetEntity=UserChecklistItems::class, mappedBy="user")
     */
    private $userChecklistItems;

    public function __construct()
    {
        $this->tokens = new ArrayCollection();
        $this->userChecklistItems = new ArrayCollection();
    }


    public function getId(): ?int
    {
        return $this->id;
    }

    public function getFirstname(): ?string
    {
        return $this->firstname;
    }

    public function setFirstname(string $firstname): self
    {
        $this->firstname = $firstname;

        return $this;
    }

    public function getLastname(): ?string
    {
        return $this->lastname;
    }

    public function setLastname(string $lastname): self
    {
        $this->lastname = $lastname;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(string $email): self
    {
        $this->email = $email;

        return $this;
    }

    public function getPassword(): ?string
    {
        return $this->password;
    }

    public function setPassword(string $password): self
    {
        $this->password = $password;

        return $this;
    }

    public function getStartdate(): ?\DateTimeInterface
    {
        return $this->startdate;
    }

    public function setStartdate(\DateTimeInterface $startdate): self
    {
        $this->startdate = $startdate;

        return $this;
    }

    /**
     * @return Collection|Token[]
     */
    public function getTokens(): Collection
    {
        return $this->tokens;
    }

    public function addToken(Token $token): self
    {
        if (!$this->tokens->contains($token)) {
            $this->tokens[] = $token;
            $token->setUser($this);
        }

        return $this;
    }

    public function removeToken(Token $token): self
    {
        if ($this->tokens->removeElement($token)) {
            if ($token->getUser() === $this) {
                $token->setUser(null);
            }
        }

        return $this;
    }

    /**
     * @return Collection|UserChecklistItems[]
     */
    public function getUserChecklistItems(): Collection
    {
        return $this->userChecklistItems;
    }

    public function addUserChecklistItem(UserChecklistItems $userChecklistItem): self
    {
        if (!$this->userChecklistItems->contains($userChecklistItem)) {
            $this->userChecklistItems[] = $userChecklistItem;
            $userChecklistItem->setUser($this);
        }

        return $this;
    }

    public function removeUserChecklistItem(UserChecklistItems $userChecklistItem): self
    {
        if ($this->userChecklistItems->removeElement($userChecklistItem)) {
            if ($userChecklistItem->getUser() === $this) {
                $userChecklistItem->setUser(null);
        }
    }

        return $this;
    }

    /**
     * @return (Role|string)[] The user roles
     */
    public function getRoles()
    {
    return array('ROLE_USER');
    }

    /**
     * @return string|null The salt
     */
    public function getSalt()
    {
        return null;
        }
    
        /**
         * Removes sensitive data from the user.
         *
         * This is important if, at any given point, sensitive information like
         * the plain-text password is stored on this object.
         */
        public function eraseCredentials()
        {
    
        }  
    
        public function getUsername() {}
    
}