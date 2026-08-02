#include <CoreGraphics/CoreGraphics.h>
#include <Carbon/Carbon.h> // For virtual key codes
#include <iostream>

int main() {
    bool shiftDown = CGEventSourceKeyState(kCGEventSourceStateHIDSystemState, kVK_Shift);
    std::cout << "Shift down: " << shiftDown << std::endl;
    return 0;
}
