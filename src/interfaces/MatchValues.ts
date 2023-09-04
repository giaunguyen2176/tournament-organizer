export interface MatchValues {
    id: string,
    round: number,
    match: number,
    active: boolean,
    bye: boolean,
    player1: {
        id: string | null,
        win: number,
        loss: number,
        draw: number
    },
    player2: {
        id: string | null,
        win: number,
        loss: number,
        draw: number
    },
    path: {
        win: string | null,
        loss: string | null
    },
    meta: {
        [key: string]: any
    }
}