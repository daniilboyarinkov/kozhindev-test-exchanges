import { useRive } from '@rive-app/react-canvas';

import CoffeeHeroAnimation from './riv/coffee.riv';

type CoffeeHeroProps = {
    className?: string;
};

export const CoffeeHero = ({ className }: CoffeeHeroProps) => {
    const { RiveComponent } = useRive({
        src: CoffeeHeroAnimation,
        stateMachines: 'State Machine 1',
        autoplay: true,
    });

    return <RiveComponent className={className} />;
};
