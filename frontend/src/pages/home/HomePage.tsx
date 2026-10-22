import Topbar from "@/components/Topbar";
import { useMusicStore } from "@/stores/useMusicStore";
import { useEffect } from "react";
import FeaturedSection from "./components/FeaturedSection";
import { ScrollArea } from "@/components/ui/scroll-area";
import SectionGrid from "./components/SectionGrid";
import { usePlayerStore } from "@/stores/usePlayerStore";
import { Radio, ShieldCheck, Zap } from "lucide-react";

const HomePage = () => {
	const {
		fetchFeaturedSongs,
		fetchMadeForYouSongs,
		fetchTrendingSongs,
		isLoading,
		madeForYouSongs,
		featuredSongs,
		trendingSongs,
	} = useMusicStore();

	const { initializeQueue } = usePlayerStore();

	useEffect(() => {
		fetchFeaturedSongs();
		fetchMadeForYouSongs();
		fetchTrendingSongs();
	}, [fetchFeaturedSongs, fetchMadeForYouSongs, fetchTrendingSongs]);

	useEffect(() => {
		if (madeForYouSongs.length > 0 && featuredSongs.length > 0 && trendingSongs.length > 0) {
			const allSongs = [...featuredSongs, ...madeForYouSongs, ...trendingSongs];
			initializeQueue(allSongs);
		}
	}, [initializeQueue, madeForYouSongs, trendingSongs, featuredSongs]);

	return (
		<main className='rounded-md overflow-hidden h-full bg-gradient-to-b from-zinc-800 to-zinc-900'>
			<Topbar />
			<ScrollArea className='h-[calc(100vh-180px)]'>
				<div className='p-4 sm:p-6'>
					{/* Enterprise Audio Streaming Telemetry Bar */}
					<div className='mb-6 p-4 rounded-lg bg-zinc-900/80 border border-zinc-800 flex flex-wrap items-center justify-between gap-4'>
						<div className='flex items-center gap-3'>
							<div className='h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse' />
							<div>
								<div className='text-sm font-semibold text-white flex items-center gap-2'>
									<span>Enterprise Creator & Audio Streaming Engine</span>
									<span className='text-[10px] uppercase font-bold px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800/50'>
										Lossless 320kbps
									</span>
								</div>
								<p className='text-xs text-zinc-400'>
									Dual-tier fault-tolerant distribution active with live synchronized listener rooms.
								</p>
							</div>
						</div>

						<div className='flex items-center gap-4 text-xs text-zinc-400'>
							<span className='flex items-center gap-1.5'>
								<Zap className='h-3.5 w-3.5 text-emerald-400' />
								Edge Accelerated
							</span>
							<span className='flex items-center gap-1.5'>
								<Radio className='h-3.5 w-3.5 text-blue-400' />
								Real-Time WebSockets
							</span>
							<span className='flex items-center gap-1.5'>
								<ShieldCheck className='h-3.5 w-3.5 text-purple-400' />
								Clerk Protected
							</span>
						</div>
					</div>

					<h1 className='text-2xl sm:text-3xl font-bold mb-6'>Popular Collections</h1>
					<FeaturedSection />

					<div className='space-y-8'>
						<SectionGrid title='Made For You' songs={madeForYouSongs} isLoading={isLoading} />
						<SectionGrid title='Trending Now' songs={trendingSongs} isLoading={isLoading} />
					</div>
				</div>
			</ScrollArea>
		</main>
	);
};
export default HomePage;
