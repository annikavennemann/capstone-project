<?php

namespace App\Entity;

use App\Repository\UserChecklistRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=UserChecklistRepository::class)
 */
class UserChecklist
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\OneToMany(targetEntity=User::class, mappedBy="userChecklist")
     */
    private $user;

    /**
     * @ORM\OneToMany(targetEntity=ChecklistItem::class, mappedBy="userChecklist")
     */
    private $checklistItem;

    /**
     * @ORM\Column(type="boolean")
     */
    private $isChecked;

    public function __construct()
    {
        $this->user = new ArrayCollection();
        $this->checklistItem = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    /**
     * @return Collection|User[]
     */
    public function getUser(): Collection
    {
        return $this->user;
    }

    public function addUser(User $user): self
    {
        if (!$this->user->contains($user)) {
            $this->user[] = $user;
            $user->setUserChecklist($this);
        }

        return $this;
    }

    public function removeUser(User $user): self
    {
        if ($this->user->removeElement($user) && $user->getUserChecklist() === $this) {
            // set the owning side to null (unless already changed)
            $user->setUserChecklist(null);
        }

        return $this;
    }

    /**
     * @return Collection|ChecklistItem[]
     */
    public function getChecklistItem(): Collection
    {
        return $this->checklistItem;
    }

    public function addChecklistItem(ChecklistItem $checklistItem): self
    {
        if (!$this->checklistItem->contains($checklistItem)) {
            $this->checklistItem[] = $checklistItem;
            $checklistItem->setUserChecklist($this);
        }

        return $this;
    }

    public function removeChecklistItem(ChecklistItem $checklistItem): self
    {
        if ($this->checklistItem->removeElement($checklistItem)) {
            // set the owning side to null (unless already changed)
            if ($checklistItem->getUserChecklist() === $this) {
                $checklistItem->setUserChecklist(null);
            }
        }

        return $this;
    }

    public function getIsChecked(): ?bool
    {
        return $this->isChecked;
    }

    public function setIsChecked(bool $isChecked): self
    {
        $this->isChecked = $isChecked;

        return $this;
    }
}
