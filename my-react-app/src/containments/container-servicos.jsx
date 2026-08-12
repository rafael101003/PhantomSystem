import * as motion from 'motion/react-client';
import './container-servicos.css';
import { Wrench } from 'react-bootstrap-icons';

function ContainerServicos() {

    return (
        <div className='containerFerramenta'>
            <motion.div
                initial={{scale:1, opacity: 0}}
                animate={{scale: 2, opacity: 1}}
                transition={{duration: 1}}
            >
                <Wrench className='iconeFerramenta' />
            </motion.div>
        </div>
    )
};

export default ContainerServicos;

