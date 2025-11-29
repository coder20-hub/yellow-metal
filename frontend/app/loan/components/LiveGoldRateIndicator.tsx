/**
 * Live Gold Rate Indicator
 * Shows real-time WebSocket connection status with animated pulse
 */

import { useGoldRates } from "../hooks/useGoldRates";
import { ArrowUp, ArrowDown, RefreshCw, X } from "lucide-react";
import { useState } from "react";

export function LiveGoldRateIndicator() {
  const { goldRate, loading, error, refetch } = useGoldRates();
  const [isExpanded, setIsExpanded] = useState(false);

  if (loading && !goldRate) {
    return null; // Don't show anything while initial loading
  }

  const isLiveData =
    goldRate?.source === "Live Real-Time Data (Binance)";
  const isPriceUp = (goldRate?.priceChangePercent ?? 0) >= 0;

  // Collapsed state - Small circular button
  if (!isExpanded) {
    return (
      <div className="fixed bottom-24 right-6 z-50">
        <button
          onClick={() => setIsExpanded(true)}
          className="group relative w-12 h-12 rounded-full bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 flex items-center justify-center border-2 border-yellow-300"
          aria-label="View live gold rate"
        >
          {/* Pulse animation ring */}
          {isLiveData && (
            <span className="absolute inset-0 rounded-full bg-yellow-400 animate-ping opacity-20"></span>
          )}
          
          {/* Gold icon/text */}
          <div className="relative flex flex-col items-center justify-center">
            <span className="text-white text-lg">💰</span>
          </div>

          {/* Tooltip on hover */}
          <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
            <div className="bg-gray-900 text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap shadow-lg">
              Live gold rate
              <div className="absolute top-full right-4 -mt-1">
                <div className="border-4 border-transparent border-t-gray-900"></div>
              </div>
            </div>
          </div>
        </button>
      </div>
    );
  }

  // Expanded state - Full widget
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 w-80 animate-in slide-in-from-bottom-4 duration-300">
        {/* Header */}
        <div className="p-4 border-b border-gray-100">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <h3 className="text-gray-900">Live Gold Rate</h3>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={refetch}
                className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Refresh rate"
              >
                <RefreshCw className="w-4 h-4 text-gray-600" />
              </button>
              <button
                onClick={() => setIsExpanded(false)}
                className="p-1.5 hover:bg-gray-100 rounded-lg transition-colors"
                aria-label="Close"
              >
                <X className="w-4 h-4 text-gray-600" />
              </button>
            </div>
          </div>
          
          {/* Real-time updates indicator */}
          <p className="text-xs text-gray-500 mt-1">
            • Real-time updates
          </p>
        </div>

        {/* Main Content */}
        <div className="p-4 space-y-4">
          {/* Gold Rate Display */}
          <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-4 border border-yellow-200">
            <div className="text-xs text-gray-600 mb-1">
              24K Gold Rate
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-gray-900" style={{ fontSize: '32px' }}>
                ₹{goldRate?.rate24k.toLocaleString("en-IN") ?? "---"}
              </span>
              <span className="text-gray-600 text-sm">/gram</span>
            </div>

            {/* 24h Change */}
            {goldRate?.priceChangePercent !== undefined && (
              <div className="mt-2 flex items-center gap-1.5">
                {isPriceUp ? (
                  <ArrowUp className="w-4 h-4 text-green-600" />
                ) : (
                  <ArrowDown className="w-4 h-4 text-red-600" />
                )}
                <span
                  className={`text-sm ${
                    isPriceUp ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {isPriceUp ? "+" : ""}
                  {goldRate.priceChangePercent.toFixed(2)}%
                </span>
                <span className="text-xs text-gray-500">24h</span>
              </div>
            )}
          </div>

          {/* Connection Info */}
          <div className="space-y-2 text-sm">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Source:</span>
              <span className="font-medium text-foreground flex items-center gap-1">
                {isLiveData && (
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                )}
                {goldRate?.source}
              </span>
            </div>
            
            {goldRate?.usdToInr && (
              <div className="flex items-center justify-between">
                <span className="text-muted-foreground">USD to INR:</span>
                <span className="font-medium text-foreground">
                  ₹{goldRate.usdToInr.toFixed(2)}
                </span>
              </div>
            )}
            
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Updated:</span>
              <span className="font-medium text-foreground text-xs">
                {goldRate?.lastUpdated}
              </span>
            </div>
          </div>

          {/* Status Banner */}
          <div className={`text-xs p-2.5 rounded-lg border ${
            isLiveData 
              ? 'bg-green-50 text-green-700 border-green-200' 
              : 'bg-orange-50 text-orange-700 border-orange-200'
          }`}>
            {isLiveData ? (
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span>Gold: Real-time • USD/INR: Every 10s</span>
              </div>
            ) : (
              <>📊 Using market rate • WebSocket disconnected</>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}