// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Play Page - Star Lane Collector
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Preserve the generated action-input state and exact payload transport
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state


export type PlayPageStarLaneCollectorActionId = "start-round-1" | "restart-round-2" | "open-settings-3" | "move-left-4" | "move-center-5" | "move-right-6" | "collect-star-7" | "resume-game-8";

export interface PlayPageStarLaneCollectorProps {
  actions?: {
    "start-round-1"?: () => void;
    "restart-round-2"?: () => void;
    "open-settings-3"?: () => void;
    "move-left-4"?: () => void;
    "move-center-5"?: () => void;
    "move-right-6"?: () => void;
    "collect-star-7"?: () => void;
    "resume-game-8"?: () => void;
  };

}

export type PlayPageStarLaneCollectorActionCallbacks = NonNullable<PlayPageStarLaneCollectorProps["actions"]>;

export function PlayPageStarLaneCollector({ actions }: PlayPageStarLaneCollectorProps) {
  return (
    <>
      <div data-surface-id="SURF_PLAY_PAGE" className="relative min-h-screen flex flex-col justify-between p-6 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-950 via-slate-950 to-black" data-setfarm-element-ref="E000001">
          
          {/* Top Bar: Header, Score, High Score, Status, Utility controls */}
          <header className="flex flex-wrap items-center justify-between gap-4 border-b border-indigo-900/50 pb-5 max-w-6xl mx-auto w-full">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-amber-400 to-indigo-500 flex items-center justify-center shadow-lg shadow-indigo-500/20 ring-1 ring-white/20">
                <svg className="w-6 h-6 text-slate-950 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
              </div>
              <div>
                <h1 className="text-xl font-bold tracking-tight text-white flex items-center gap-2">
                  Star Lane Collector
                  <span className="text-xs font-mono font-medium px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">v2.0</span>
                </h1>
                <p className="text-xs text-indigo-300/70">Navigate lanes and collect stellar energy</p>
              </div>
            </div>
      
            {/* Stats Readouts & Status Panel */}
            <div className="flex items-center gap-4 flex-wrap">
              <div data-surface-id="SURF_STATUS_PANEL" className="px-4 py-2 rounded-lg bg-indigo-950/60 border border-indigo-800/50 backdrop-blur shadow-inner" data-setfarm-element-ref="E000002" data-observable-refs="OBS_COLLECT_STAR_COLLECT_STATUS OBS_OPEN_SETTINGS_SETTINGS_STATUS OBS_RESTART_ROUND_RESTART_STATUS OBS_RESUME_GAME_RESUME_STATUS OBS_START_ROUND_START_STATUS">
                <span className="text-xs uppercase tracking-wider text-indigo-400 font-semibold block">System Status</span>
                <span className="text-sm font-medium text-emerald-400 flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  Ready
                </span>
              </div>
      
              <div data-surface-id="SURF_SCORE_READOUT" className="px-4 py-2 rounded-lg bg-slate-900/80 border border-slate-800 shadow-inner" data-setfarm-element-ref="E000003" data-observable-refs="OBS_COLLECT_STAR_COLLECT_SCORE_READOUT OBS_RESTART_ROUND_RESTART_SCORE_READOUT OBS_RESUME_GAME_RESUME_SCORE_PRESERVED">
                <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block">Current Run</span>
                <span className="text-sm font-bold font-mono text-amber-300">Score: 0</span>
              </div>
      
              <div data-surface-id="SURF_HIGH_SCORE_READOUT" className="px-4 py-2 rounded-lg bg-slate-900/80 border border-slate-800 shadow-inner" data-setfarm-element-ref="E000004" data-observable-refs="OBS_COLLECT_STAR_COLLECT_HIGH_SCORE_READOUT OBS_RESTART_ROUND_RESTART_HIGH_SCORE_PRESERVED">
                <span className="text-xs uppercase tracking-wider text-slate-400 font-semibold block">Record</span>
                <span className="text-sm font-bold font-mono text-indigo-300">High score: 0</span>
              </div>
      
              {/* Session Controls in Header */}
              <div className="flex items-center gap-2">
                <button data-action="ACT_START_ROUND" data-control-slot="CSLOT_START_ROUND_START_BUTTON" type="button" className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-sm transition shadow-lg shadow-emerald-900/40 border border-emerald-400/30 focus:outline-none focus:ring-2 focus:ring-emerald-400" data-setfarm-element-ref="E000005" data-observable-refs="OBS_START_ROUND_START_BUTTON_STATE" data-action-id="start-round-1" onClick={actions?.["start-round-1"]}>
                  Start Round
                </button>
                <button data-action="ACT_RESTART_ROUND" data-control-slot="CSLOT_RESTART_ROUND_RESTART_BUTTON" type="button" className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium text-sm transition border border-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-500" data-setfarm-element-ref="E000006" data-observable-refs="OBS_RESTART_ROUND_RESTART_BUTTON_STATE" data-action-id="restart-round-2" onClick={actions?.["restart-round-2"]}>
                  Restart Round
                </button>
                <button data-action="ACT_OPEN_SETTINGS" data-control-slot="CSLOT_OPEN_SETTINGS_SETTINGS_BUTTON" type="button" className="px-4 py-2 rounded-lg bg-indigo-950/80 hover:bg-indigo-900/80 text-indigo-200 font-medium text-sm transition border border-indigo-700/60 focus:outline-none focus:ring-2 focus:ring-indigo-400" data-setfarm-element-ref="E000007" data-action-id="open-settings-3" onClick={actions?.["open-settings-3"]}>
                  Open Settings
                </button>
              </div>
            </div>
          </header>
      
          {/* Main Game Board Container */}
          <main className="my-auto py-6 flex flex-col items-center justify-center max-w-6xl mx-auto w-full">
            {/* Game Scene Frame */}
            <div data-surface-id="SURF_GAME_SCENE" className="relative w-full max-w-3xl h-[420px] rounded-2xl bg-gradient-to-b from-slate-900 via-indigo-950 to-slate-900 border-2 border-indigo-700/40 overflow-hidden shadow-2xl shadow-indigo-950/80 flex flex-col" data-setfarm-element-ref="E000008" data-observable-refs="OBS_OPEN_SETTINGS_SETTINGS_SCENE_MOUNTED">
              {/* Visual Grid / Lanes overlay */}
              <div className="absolute inset-0 grid grid-cols-3 divide-x divide-indigo-800/30 pointer-events-none">
                <div className="h-full bg-indigo-500/[0.02]"></div>
                <div className="h-full bg-indigo-500/[0.04]"></div>
                <div className="h-full bg-indigo-500/[0.02]"></div>
              </div>
      
              {/* Lane Labels atop scene */}
              <div className="relative z-10 grid grid-cols-3 text-center py-3 text-xs font-mono font-medium text-indigo-400/60 border-b border-indigo-900/40">
                <div>TRACK 0 (LEFT)</div>
                <div>TRACK 1 (CENTER)</div>
                <div>TRACK 2 (RIGHT)</div>
              </div>
      
              {/* Active Scene Arena with Markers */}
              <div className="relative flex-1 grid grid-cols-3 items-center">
                
                {/* Column 0 (Lane 0) */}
                <div className="relative h-full flex flex-col justify-end items-center pb-8">
                  {/* Player Marker positioned at initial Lane 0 */}
                  <div data-surface-id="SURF_PLAYER_MARKER" className="z-20 px-4 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold shadow-lg shadow-cyan-500/30 border border-cyan-300/40 flex items-center gap-2 transform transition-colors duration-300" data-setfarm-element-ref="E000009" data-observable-refs="OBS_MOVE_CENTER_CENTER_LANE_MARKER OBS_MOVE_LEFT_LEFT_LANE_MARKER OBS_MOVE_RIGHT_RIGHT_LANE_MARKER OBS_RESTART_ROUND_RESTART_LANE_MARKER OBS_RESUME_GAME_RESUME_LANE_PRESERVED">
                    <svg className="w-4 h-4 text-cyan-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                    <span>Lane 0</span>
                  </div>
                </div>
      
                {/* Column 1 (Lane 1) */}
                <div className="relative h-full flex flex-col justify-start items-center pt-10">
                  {/* Star Marker positioned in Lane 1 */}
                  <div data-surface-id="SURF_STAR_MARKER" className="z-20 p-3 rounded-2xl bg-amber-500/20 border-2 border-amber-400/80 shadow-lg shadow-amber-500/30 backdrop-blur animate-bounce flex items-center justify-center" data-setfarm-element-ref="E000010" data-observable-refs="OBS_COLLECT_STAR_COLLECT_STAR_MARKER OBS_RESTART_ROUND_RESTART_STAR_VISIBLE">
                    <svg className="w-8 h-8 text-amber-300 fill-current drop-shadow-[0_0_8px_rgba(251,191,36,0.8)]" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                  </div>
                </div>
      
                {/* Column 2 (Lane 2) */}
                <div className="relative h-full flex flex-col justify-center items-center">
                  {/* Empty target lane slot */}
                </div>
      
              </div>
      
              {/* Ambient decorative particle grid lines */}
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-indigo-900/20 to-transparent pointer-events-none"></div>
            </div>
      
            {/* Action Panel & Movement Controls */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 w-full max-w-3xl">
              <div className="flex items-center gap-2 p-1.5 rounded-xl bg-slate-900/90 border border-slate-800 shadow-lg">
                <button data-action="ACT_MOVE_LEFT" data-control-slot="CSLOT_MOVE_LEFT_LEFT_BUTTON" type="button" className="px-5 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-100 font-medium text-sm transition border border-slate-700/80 shadow flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-indigo-400" data-setfarm-element-ref="E000011" data-observable-refs="OBS_MOVE_LEFT_LEFT_BUTTON_STATE" data-action-id="move-left-4" onClick={actions?.["move-left-4"]}>
                  <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                  </svg>
                  Move Left
                </button>
                <button data-action="ACT_MOVE_CENTER" data-control-slot="CSLOT_MOVE_CENTER_CENTER_BUTTON" type="button" className="px-5 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-100 font-medium text-sm transition border border-slate-700/80 shadow flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-indigo-400" data-setfarm-element-ref="E000012" data-observable-refs="OBS_MOVE_CENTER_CENTER_BUTTON_STATE" data-action-id="move-center-5" onClick={actions?.["move-center-5"]}>
                  <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h8m-8 5h8m-8 5h8"></path>
                  </svg>
                  Move Center
                </button>
                <button data-action="ACT_MOVE_RIGHT" data-control-slot="CSLOT_MOVE_RIGHT_RIGHT_BUTTON" type="button" className="px-5 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-100 font-medium text-sm transition border border-slate-700/80 shadow flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-indigo-400" data-setfarm-element-ref="E000013" data-observable-refs="OBS_MOVE_RIGHT_RIGHT_BUTTON_STATE" data-action-id="move-right-6" onClick={actions?.["move-right-6"]}>
                  Move Right
                  <svg className="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </button>
              </div>
      
              <button data-action="ACT_COLLECT_STAR" data-control-slot="CSLOT_COLLECT_STAR_COLLECT_BUTTON" type="button" className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 hover:from-amber-400 hover:to-yellow-300 text-slate-950 font-bold text-sm transition shadow-lg shadow-amber-500/20 border border-yellow-200/50 flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-amber-400" data-setfarm-element-ref="E000014" data-observable-refs="OBS_COLLECT_STAR_COLLECT_BUTTON_STATE" data-action-id="collect-star-7" onClick={actions?.["collect-star-7"]}>
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                </svg>
                Collect Star
              </button>
            </div>
          </main>
      
          {/* Settings Overlay Modal (Declared contained surface inside SURF_PLAY_PAGE, must remain visible & pointer-operable for static snapshot requirements) */}
          <div data-surface-id="SURF_SETTINGS_OVERLAY" className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm pointer-events-auto" data-setfarm-element-ref="E000015" data-observable-refs="OBS_OPEN_SETTINGS_SETTINGS_OVERLAY_VISIBLE OBS_RESUME_GAME_RESUME_OVERLAY_HIDDEN">
            <div className="w-full max-w-md bg-slate-900 border border-indigo-700/50 rounded-2xl shadow-2xl p-6 text-slate-100 relative">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-indigo-950 text-indigo-400 border border-indigo-800/60">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-white leading-snug">Game Settings</h2>
                    <p className="text-xs text-slate-400">Configure round options and audio preferences</p>
                  </div>
                </div>
              </div>
      
              <div className="py-5 space-y-4 text-sm text-slate-300">
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-800/60 border border-slate-700/50">
                  <div>
                    <div className="font-medium text-white">Audio Effects</div>
                    <div className="text-xs text-slate-400">Stellar collection chime &amp; engine pulse</div>
                  </div>
                  <span className="text-xs font-mono font-medium px-2.5 py-1 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">Enabled</span>
                </div>
      
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-800/60 border border-slate-700/50">
                  <div>
                    <div className="font-medium text-white">Lane Display</div>
                    <div className="text-xs text-slate-400">Track guide markers and high-contrast lines</div>
                  </div>
                  <span className="text-xs font-mono font-medium px-2.5 py-1 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">Active</span>
                </div>
      
                <div className="p-3 rounded-xl bg-indigo-950/40 border border-indigo-900/60 text-xs text-indigo-300/80 leading-relaxed">
                  The round is currently paused while settings are open. Click resume below to continue collecting stars across the lanes.
                </div>
              </div>
      
              <div className="pt-3 border-t border-slate-800 flex justify-end">
                <button data-action="ACT_RESUME_GAME" data-control-slot="CSLOT_RESUME_GAME_RESUME_BUTTON" type="button" className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition shadow-lg shadow-indigo-600/30 border border-indigo-400/30 focus:outline-none focus:ring-2 focus:ring-indigo-400" data-setfarm-element-ref="E000016" data-action-id="resume-game-8" onClick={actions?.["resume-game-8"]}>
                  Resume Game
                </button>
              </div>
            </div>
          </div>
      
          {/* Footer Chrome */}
          <footer className="pt-6 border-t border-slate-900/80 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 max-w-6xl mx-auto w-full">
            <div>Star Lane Collector © 2025 Setfarm Games</div>
            <div>Three-Lane Orbit Dynamics Mode</div>
          </footer>
        </div>
    </>
  );
}
