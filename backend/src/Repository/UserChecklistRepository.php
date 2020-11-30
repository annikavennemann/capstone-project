<?php

namespace App\Repository;

use App\Entity\UserChecklist;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @method UserChecklist|null find($id, $lockMode = null, $lockVersion = null)
 * @method UserChecklist|null findOneBy(array $criteria, array $orderBy = null)
 * @method UserChecklist[]    findAll()
 * @method UserChecklist[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UserChecklistRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, UserChecklist::class);
    }

    public function save(UserChecklist $userChecklist): UserChecklist  {
        $this->_em->persist($userChecklist);
        $this->_em->flush();

        return $userChecklist;
    }

}
