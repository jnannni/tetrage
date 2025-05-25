import { Player } from "./player";
import { loadImage } from "../utils/loadImage";
export type avatarStateConfig = {
    spriteSrc: string;
    frameCount: number;
    frameWidth: number;
    frameHeight: number;
    frameY: number;
    frameInterval: number;
}

const shinobiAvatar: Record<string, avatarStateConfig> = {
    idle: {
        spriteSrc: '/shinobi.png',
        frameCount: 6,
        frameWidth: 128,
        frameHeight: 128,
        frameY: 0,
        frameInterval: 100,
    }, 
    runRight: {
        spriteSrc: '/shinobi.png',
        frameCount: 8,
        frameWidth: 128,
        frameHeight: 128,
        frameY: 128,
        frameInterval: 100,
    },
    runLeft: {
        spriteSrc: '/shinobi.png',
        frameCount: 8,
        frameWidth: 128,
        frameHeight: 128,
        frameY: 256,
        frameInterval: 100,
    },
    jump: {
        spriteSrc: '/shinobi.png',
        frameCount: 12,
        frameWidth: 128,
        frameHeight: 128,
        frameY: 384,
        frameInterval: 100,
    },
    walkRight: {
        spriteSrc: '/shinobi.png',
        frameCount: 8,
        frameWidth: 128,
        frameHeight: 128,
        frameY: 512,
        frameInterval: 100,
    },
    walkLeft: {
        spriteSrc: '/shinobi.png',
        frameCount: 8,
        frameWidth: 128,
        frameHeight: 128,
        frameY: 640,
        frameInterval: 100,
    }
}

export const avatarConfig: Record<string, Record<string, avatarStateConfig>> = {
    shinobi: shinobiAvatar
}

export async function applyAvatarConfig(player: Player, name: string) {
    const config = avatarConfig[name];
    for (const [stateName, state] of Object.entries(config)) {
        const image = await loadImage(state.spriteSrc);
        player.addAnimationState(stateName, {
            ...state,
            image
        })
    }
}