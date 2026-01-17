
import React from 'react';

// Reusable pulse block - Safer for Android WebViews than custom gradients
const ShimmerBlock = ({ className = "" }: { className?: string }) => (
  <div className={`bg-slate-200 dark:bg-slate-700 rounded-lg animate-pulse ${className}`}></div>
);

export const SkeletonSchoolCard: React.FC = () => {
  return (
    <div className="bg-white dark:bg-dark-900 p-6 rounded-[2rem] border border-slate-100 dark:border-white/5 shadow-sm mb-6 transition-colors">
      <div className="flex justify-between items-start gap-4">
        <div className="space-y-3 w-full">
          <ShimmerBlock className="h-4 w-24 rounded-full" />
          <ShimmerBlock className="h-8 w-3/4 rounded-xl" />
          <ShimmerBlock className="h-4 w-1/2 rounded-lg" />
        </div>
        <ShimmerBlock className="w-14 h-14 rounded-2xl flex-shrink-0" />
      </div>
    </div>
  );
};

export const SkeletonProfile: React.FC = () => {
  return (
    <div className="p-4 flex flex-col items-center w-full animate-in fade-in duration-500">
      <div className="mt-4 mb-6 relative">
        <ShimmerBlock className="w-28 h-28 rounded-full" />
      </div>

      <div className="flex flex-col items-center space-y-3 mb-8 w-full">
        <ShimmerBlock className="h-8 w-48 rounded-xl" />
        <ShimmerBlock className="h-5 w-32 rounded-full" />
      </div>

      <div className="w-full bg-white dark:bg-dark-900 rounded-[2.5rem] shadow-sm border border-slate-100 dark:border-white/5 p-6 space-y-6 mb-8">
        {[1, 2, 3].map((i) => (
          <div key={i} className="flex items-center gap-5">
            <ShimmerBlock className="w-12 h-12 rounded-2xl flex-shrink-0" />
            <div className="flex-1 space-y-2">
              <ShimmerBlock className="h-3 w-20 rounded-full" />
              <ShimmerBlock className="h-5 w-full rounded-lg" />
            </div>
          </div>
        ))}
      </div>
      <ShimmerBlock className="w-full max-w-xs h-14 rounded-2xl" />
    </div>
  );
};

export const SkeletonWidget: React.FC = () => {
  return (
    <div className="bg-white dark:bg-dark-900 p-5 rounded-3xl border border-slate-100 dark:border-white/5 space-y-4">
      <ShimmerBlock className="h-6 w-2/3 rounded-xl" />
      <div className="space-y-3 pt-1">
        <ShimmerBlock className="h-3 w-full rounded-full" />
        <ShimmerBlock className="h-3 w-5/6 rounded-full" />
      </div>
    </div>
  );
};

export const SkeletonPeriodGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-3">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="bg-white dark:bg-dark-900 p-4 rounded-[2rem] border border-slate-100 dark:border-white/5 shadow-sm h-36 flex flex-col justify-between">
          <div className="flex justify-between">
             <ShimmerBlock className="h-3 w-12 rounded-full" />
             <ShimmerBlock className="h-5 w-5 rounded-full" />
          </div>
          <div className="space-y-2">
            <ShimmerBlock className="h-4 w-full rounded-lg" />
            <ShimmerBlock className="h-3 w-2/3 rounded-lg" />
          </div>
          <ShimmerBlock className="h-8 w-full rounded-xl self-end" />
        </div>
      ))}
    </div>
  );
};
