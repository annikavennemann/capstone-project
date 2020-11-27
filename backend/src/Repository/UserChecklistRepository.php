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

    // /**
    //  * @return UserChecklist[] Returns an array of UserChecklist objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('u')
            ->andWhere('u.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('u.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?UserChecklist
    {
        return $this->createQueryBuilder('u')
            ->andWhere('u.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
