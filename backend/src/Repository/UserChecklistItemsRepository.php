<?php

namespace App\Repository;

use App\Entity\UserChecklistItems;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method UserChecklistItems|null find($id, $lockMode = null, $lockVersion = null)
 * @method UserChecklistItems|null findOneBy(array $criteria, array $orderBy = null)
 * @method UserChecklistItems[]    findAll()
 * @method UserChecklistItems[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UserChecklistItemsRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UserChecklistItems::class);
    }

    public function save(UserChecklistItem $userChecklistItem): UserChecklistItem  {
        $this->_em->persist($userChecklistItem);
        $this->_em->flush();
        return $userChecklistItem;
    }
}
