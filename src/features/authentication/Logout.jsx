import ButtonIcon from './../../ui/ButtonIcon';
import SpinnerMini from './../../ui/SpinnerMini';
import { HiArrowRightOnRectangle } from 'react-icons/hi2';
import { useLogout } from './useLogout';

function Logout() {
    const { logout, isPending } = useLogout();

    return (
        <ButtonIcon disabled={isPending} onClick={logout}>
          { !isPending ? <HiArrowRightOnRectangle /> : <SpinnerMini/>}
        </ButtonIcon>
    )
}

export default Logout