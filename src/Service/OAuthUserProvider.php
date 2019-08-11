<?php

namespace App\Service;

use App\Repository\UserRepository;
use DateTime;
use Exception;
use HWI\Bundle\OAuthBundle\OAuth\Response\UserResponseInterface;
use HWI\Bundle\OAuthBundle\Security\Core\User\OAuthAwareUserProviderInterface;
use Symfony\Component\Security\Core\Exception\UsernameNotFoundException;
use Symfony\Component\Security\Core\User\UserInterface;

class OAuthUserProvider implements OAuthAwareUserProviderInterface
{
    /**
     * @var UserRepository
     */
    private $userRepository;

    public function __construct(UserRepository $userRepository)
    {
        $this->userRepository = $userRepository;
    }

    /**
     * @param UserResponseInterface $response
     * @return UserInterface
     * @throws UsernameNotFoundException if the user is not found
     * @throws Exception
     */
    public function loadUserByOAuthUserResponse(UserResponseInterface $response)
    {
        $email = $response->getEmail();
        $user = $this->userRepository->findOneBy(['email' => $email]);
        if ($user == null) {
            throw new UsernameNotFoundException("Email \'${email}\' not matched");
        }
        $user->setFullname($response->getNickname());
        $user->setProfilePictureUrl($response->getProfilePicture());
        $user->setUpdatedAt(new DateTime());
        $this->userRepository->save($user);
        return $user;
    }
}
