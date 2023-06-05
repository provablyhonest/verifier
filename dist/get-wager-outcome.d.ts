import * as Wagers from "./lib/wagers.generated";
import { DemoFairCoinToss, DemoFairCoinToss_Choice } from "./wagers/demo_fair_coin_toss";
import { Currency } from "./wagers";
export declare function getResultRoullete(sig: Uint8Array): number;
export declare function getOutcomeRoulette(sig: Uint8Array, w: Wagers.RouletteWager): {
    result: number;
    profit: {
        amount: number;
        currency: Wagers.Currency;
    };
};
export declare function getResultFairCoinToss(sig: Uint8Array, w: DemoFairCoinToss): DemoFairCoinToss_Choice.HEADS | DemoFairCoinToss_Choice.TAILS;
export declare function getOutcomeFairCoinToss(sig: Uint8Array, w: DemoFairCoinToss): {
    result: DemoFairCoinToss_Choice;
    profit: {
        amount: number;
        currency: Currency;
    };
};
export declare function getWagerOutcome(sig: Uint8Array, w: Wagers.Wager): {
    result: number;
    profit: {
        amount: number;
        currency: Wagers.Currency;
    };
} | undefined;
