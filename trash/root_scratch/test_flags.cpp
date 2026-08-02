#include <CoreGraphics/CoreGraphics.h>
#include <iostream>

int main() {
    CGEventFlags flags = CGEventSourceFlagsState(kCGEventSourceStateCombinedSessionState);
    bool shiftDown = (flags & kCGEventFlagMaskShift) != 0;
    std::cout << "Shift down: " << shiftDown << std::endl;
    return 0;
}
