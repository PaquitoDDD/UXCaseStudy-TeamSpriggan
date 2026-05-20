import { DivWXxhx, DivBackgroundGroupTransitionGroup } from '../../imports/DivSiteContainer-3/DivSiteContainer-54-2079';
import EnhancedHeader from '../components/EnhancedHeader';
import EnhancedFooter from '../components/EnhancedFooter';

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Header */}
      <div className="relative h-[121px] w-full">
        <EnhancedHeader />
      </div>

      {/* Main Content */}
      <div className="relative w-full">
        <DivBackgroundGroupTransitionGroup />
        <div className="relative py-12">
          <DivWXxhx />
        </div>
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
