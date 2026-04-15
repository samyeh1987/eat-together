'use client';

import { useAdminT } from './AdminI18nProvider';
import {
  Users,
  UtensilsCrossed,
  TrendingUp,
  UserPlus,
  Database,
  CheckCircle2,
  XCircle,
  Store,
  Image as ImageIcon,
} from 'lucide-react';

const statsConfig = [
  { labelKey: 'dashboard.totalUsers', value: '0', icon: Users, color: 'from-blue-500 to-blue-600' },
  { labelKey: 'dashboard.activeMeals', value: '0', icon: UtensilsCrossed, color: 'from-[#FF6B35] to-[#FF6B6B]' },
  { labelKey: 'dashboard.mealsThisWeek', value: '0', icon: TrendingUp, color: 'from-[#2EC4B6] to-[#5DD9CE]' },
  { labelKey: 'dashboard.newUsersToday', value: '0', icon: UserPlus, color: 'from-purple-500 to-purple-600' },
];

export default function AdminDashboard() {
  const t = useAdminT();

  return (
    <div className="space-y-6">
      {/* Page Title */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">{t('dashboard.title')}</h1>
        <p className="text-sm text-gray-500 mt-1">{t('dashboard.subtitle')}</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {statsConfig.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.labelKey} className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-gray-500 font-medium">{t(stat.labelKey)}</p>
                  <p className="text-2xl font-bold text-gray-800 mt-1">{stat.value}</p>
                </div>
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-sm`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Quick Stats Row */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-4 border border-gray-100">
          <div className="flex items-center gap-2 mb-2">
            <CheckCircle2 className="w-4 h-4 text-[#2EC4B6]" />
            <span className="text-xs text-gray-500 font-medium">{t('dashboard.confirmationRate')}</span>
          </div>
          <p className="text-xl font-bold text-gray-800">--</p>
          <div className="w-full h-1.5 bg-gray-100 rounded-full mt-2" />
        </div>
        <div className="bg-white rounded-xl p-4 border border-gray-100">
          <div className="flex items-center gap-2 mb-2">
            <XCircle className="w-4 h-4 text-[#FF6B6B]" />
            <span className="text-xs text-gray-500 font-medium">{t('dashboard.cancellationRate')}</span>
          </div>
          <p className="text-xl font-bold text-gray-800">--</p>
          <div className="w-full h-1.5 bg-gray-100 rounded-full mt-2" />
        </div>
        <div className="bg-white rounded-xl p-4 border border-gray-100">
          <div className="flex items-center gap-2 mb-2">
            <Store className="w-4 h-4 text-[#FFD700]" />
            <span className="text-xs text-gray-500 font-medium">{t('dashboard.partnerRestaurants')}</span>
          </div>
          <p className="text-xl font-bold text-gray-800">0</p>
        </div>
        <div className="bg-white rounded-xl p-4 border border-gray-100">
          <div className="flex items-center gap-2 mb-2">
            <ImageIcon className="w-4 h-4 text-purple-500" />
            <span className="text-xs text-gray-500 font-medium">{t('dashboard.galleryPhotos')}</span>
          </div>
          <p className="text-xl font-bold text-gray-800">0</p>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Recent Meals */}
        <div className="xl:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between px-5 py-4 border-b border-gray-50">
            <h2 className="font-semibold text-gray-800">{t('dashboard.recentMeals')}</h2>
            <span className="text-xs text-[#FF6B35] font-medium cursor-pointer hover:underline">{t('dashboard.viewAll')}</span>
          </div>
          <div className="px-5 py-12 text-center">
            <Database className="w-10 h-10 text-gray-300 mx-auto mb-3" />
            <p className="text-sm text-gray-400">尚無資料，請連接資料庫</p>
          </div>
        </div>

        {/* Recent Users */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm">
          <div className="flex items-center justify-between px-5 py-4 border-b border-gray-50">
            <h2 className="font-semibold text-gray-800">{t('dashboard.newUsers')}</h2>
            <span className="text-xs text-[#FF6B35] font-medium cursor-pointer hover:underline">{t('dashboard.viewAll')}</span>
          </div>
          <div className="px-5 py-12 text-center">
            <Database className="w-10 h-10 text-gray-300 mx-auto mb-3" />
            <p className="text-sm text-gray-400">尚無資料，請連接資料庫</p>
          </div>
        </div>
      </div>

      {/* Activity Log */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm">
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-50">
          <h2 className="font-semibold text-gray-800">{t('dashboard.activityLog')}</h2>
          <span className="text-xs text-[#FF6B35] font-medium cursor-pointer hover:underline">{t('dashboard.viewAll')}</span>
        </div>
        <div className="px-5 py-12 text-center">
          <Database className="w-10 h-10 text-gray-300 mx-auto mb-3" />
          <p className="text-sm text-gray-400">尚無資料，請連接資料庫</p>
        </div>
      </div>
    </div>
  );
}
