import { DivQieg, DivBackgroundGroupTransitionGroup } from '../../imports/DivSiteContainer-2/DivSiteContainer-38-1165';
import EnhancedHeader from '../components/EnhancedHeader';
import EnhancedFooter from '../components/EnhancedFooter';

export default function ShopPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Header */}
      <div className="relative h-[121px] w-full">
        <EnhancedHeader />
      </div>

      {/* Main Content */}
      <div className="h-[986px] relative w-full">
        <DivBackgroundGroupTransitionGroup />
        <DivQieg />
      </div>

      {/* Footer */}
      <footer className="bg-[#fafafa] py-16 px-8 mt-20">
        <div className="max-w-[1400px] mx-auto relative h-[375px]">
          <EnhancedFooter />
        </div>
      </footer>
    </div>
  );
}
