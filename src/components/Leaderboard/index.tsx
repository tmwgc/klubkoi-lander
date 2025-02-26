import Image from "next/image";
import React from "react";

const Leaderboard = () => {
  return (
    <div>
      <div className="leaderboard-bg max-w-[1600px] w-full m-auto max-md:max-w-full py-16">
        <div>
          <div className="mb-20 px-12 leaderboard-bg-1">
            <div className="max-w-[450px] w-full">
              <h2 className="text-4xl font-black leading-10 text-white mb-12 max-md:max-w-full max-md:text-3xl">
                RUN THE <span className="gradient-text">LEADERBOARDS</span>
              </h2>
              <p className="mb-6">
                Only the best rise to the top at Koi. Compete for dominance across various Leader
                Boards: Poker Pros, Casino Conquerors, PvP Masters, Unbeatable Bookies, and Market
                Maestros. Prove your skill and secure your place among the most successful players
                in the world. Whether you&#39;re crushing poker tables, mastering casino games,
                outplaying opponents in PvP matchups, betting like a pro in the sportsbook, or
                dominating crypto futures trading, every wager brings you closer to leaderboard
                glory.
              </p>
              <p>
                But at Koi, ranking high isn’t just for bragging rights—it’s for profits! Every day,
                a Leaderboard is selected (at random) via a spinning hologram. The Top 3 Players of
                the chosen Board split 10% of Koi’s daily revenue (5%, 3%, and 2% respectively).
                Climb the ranks of your favorite Leader Board and tune in for the Daily Spin – Your
                chance for a Jackpot starts Today!
              </p>
            </div>
          </div>
          <div className="flex justify-end px-12 leaderboard-bg-2">
            <div className="max-w-[500px] w-full">
              <h2 className="text-4xl font-black leading-10 text-white mb-12 max-md:max-w-full max-md:text-3xl">
                <span className="gradient-text">TEAM UP</span> AND HACK BOSS’S STAKING POOLS
              </h2>
              <p className="mb-6">
                In Klub Koi, power isn’t just taken—it’s hacked. Players can form alliances of up to
                six members to track down 9 out of 15 hidden microchips, powering a quantum computer
                buried deep within Koi. If activated, this computer grants access to the wallet of
                the Boss’s Staking Pool, the most exclusive and profitable fund in the ecosystem.
              </p>
              <p>
                This high-stakes challenge demands strategy, teamwork, and deception. Navigate Koi’s
                immersive world, crack encrypted puzzles, and out maneuver the Bosses who will stop
                at nothing to protect their fortune. But choose your allies wisely—trust can be a
                currency as valuable as KOI itself. If your team succeeds, you rewrite the rules and
                take control of one of the most powerful financial vaults in Klub Koi. The question
                is—who will you trust to pull it off?
              </p>
            </div>
          </div>
        </div>
      </div>
      <section className="max-w-[1600px] w-full m-auto max-md:max-w-full">
        <Image
          src="/images/teams.png"
          alt="teams"
          width={700}
          height={300}
          className="w-[100%] h-auto"
        />
      </section>
    </div>
  );
};

export default Leaderboard;
