// Generated from Virtue FX Manager Next.js website
const docData = {
    en: {
      title: "Virtue FX Manager Wiki & Documentation",
      subtitle: "Learn how to visually organize, filter, and load your massive plugin library instantly inside REAPER.",
      langSelectLabel: "Select Language",
      tableOfContents: "Table of Contents",
      searchPlaceholder: "Search help...",
      breadcrumbsHome: "Help",
      categories: {
        setup: "Setup & Configuration",
        workflows: "Core Workflows",
        organization: "Library Organization",
        shortcuts: "Keyboard Shortcuts"
      },
      sections: [
        {
          id: "installation-launching",
          title: "0. Installation & Launching (App Usability Guide)",
          content: `<div>
              <p>Before organizing your plugins, you must install and activate Virtue FX Manager:</p>
              <ul>
                <li><strong>Download & Install:</strong> Run the downloaded installer for your OS (macOS .dmg or Windows .exe). It automatically places the native C++ plugin into your REAPER UserPlugins folder.</li>
                <li><strong>Launch in REAPER:</strong> Open REAPER, go to the Actions List (press <kbd>?</kbd>), search for <em>"Virtue FX Manager"</em>, and run the action to open the main window.</li>
                <li><strong>Activation & Deactivation Safeguards:</strong> Click the gear icon inside the app to enter your Lemon Squeezy License Key and activate the full version. To prevent accidental license removal, a warning confirmation popup protects the deactivation button.</li>
                <li><strong>macOS Focus Event Routing:</strong> The manager features full first-click focus-override routing on macOS, meaning buttons, list items, and tabs react immediately to mouse clicks even if the manager's window is not currently in focus.</li>
              </ul>
            </div>`
        },
        {
          id: "getting-started",
          title: "1. Getting Started & Scan Setup",
          content: `<div>
              <p>When you first launch Virtue FX Manager inside REAPER, the manager reads your existing REAPER plugin cache to populate your list. To ensure everything is up to date:</p>
              <ul>
                <li><strong>Automatic Cache Sync:</strong> Virtue automatically detects newly scanned plugins. If a plugin is missing, run a standard scan in REAPER (<em>Options &gt; Preferences &gt; Plug-ins &gt; VST &gt; Re-scan</em>).</li>
                <li><strong>Scanning Directories:</strong> In the Settings panel (gear icon), verify your OS-specific plugin paths match where your plugins are installed.</li>
                <li><strong>Language Config:</strong> Set the interface language to your preference. The app dynamically localizes menus, status bars, and tooltips.</li>
              </ul>
            <div style="margin-top: 1.5rem; padding: 1rem; border-radius: var(--radius); border: 1px solid var(--accent-line); background-color: var(--accent-soft); color: var(--ink);">
                <strong style="color: var(--accent-strong); display: block; margin-bottom: 0.5rem;">🚀 Quick Start Workflow (How to Proceed):</strong>
                <ol style="margin: 0; padding-left: 1.25rem; font-size: 0.95rem; line-height: 1.6;">
                  <li><strong>Initial Setup:</strong> Launch VfxM in REAPER, verify your language selection, and confirm plugin paths in Settings.</li>
                  <li><strong>Scan Your Library:</strong> Open the <strong>Plugin Manager</strong> window (toggled via the toolbar button next to Settings), select your scan mode (e.g. only missing or regenerate existing), and click <strong>Start Batch Scan</strong> to build your visual library. Relaunch REAPER and click <strong>Resume Crashed Scan</strong> if a crash occurs.</li>
                  <li><strong>Manual Capture:</strong> For any blocklisted or offline plugins, float the plugin window in REAPER, hover it in VfxM, and click the <strong>Camera Icon</strong> to manually capture its screen.</li>
                  <li><strong>Organize Clutter:</strong> Right-click and choose <strong>Hide / Unlist</strong> to firewall trial versions or utility plugins you do not need.</li>
                  <li><strong>Create Boards:</strong> Click the <strong>+</strong> tab icon to create a new board (e.g. "Vocals"), drag your favorite plugins in, and sort them using ratings.</li>
                  <li><strong>Insert & Mix:</strong> Double-click any card or drag it directly onto your tracks to load them instantly.</li>
                </ol>
              </div>
            </div>`
        },
        {
          id: "visual-thumbnails",
          title: "2. Visual Thumbnail System & Camera Utility",
          content: `<div>
              <p>Virtue FX Manager is built around a visual flow. You can browse plugins by their actual user interfaces instead of generic text lines:</p>
              <ul>
                <li><strong>Grid View vs List View:</strong> Toggle between the graphical card layout and a metadata spreadsheet list view using the layout switcher buttons at the top of the browser.</li>
                <li><strong>Built-in Camera Capture:</strong> Open the target plugin interface in REAPER, hover the plugin in Virtue, and click the <strong>Camera Icon</strong> to instantly capture, crop, and store a custom screenshot. Clipboard commands (<kbd>Cmd/Ctrl + C/V</kbd>) and undo/redo (<kbd>Cmd/Ctrl + Z / Shift+Z</kbd>) are fully supported.</li>
                <li><strong>Auto Thumbnail Scanner:</strong> Use the built-in batch scan utility (accessible via the dedicated <strong>Plugin Manager</strong> window toggled on the top toolbar next to Settings) to automatically build your entire visual library in minutes. Target specific developers (e.g., Waves) using autocomplete filters, and regenerate thumbnails (e.g., to overwrite yellow demo mode bars) by selecting the regenerate scan mode. It runs in the background, loading each plugin sequentially onto a temporary track, capturing its graphical interface, and saving it to your grid.</li>
                <li><strong>DAW Crash Prevention & Blocklist:</strong> To prevent crash loops from unstable plugins during a scan, VfxM checks if external paths are online, ignores unlisted/hidden plugins, and automatically blocklists any crashing plugins, skipping them on subsequent runs. You can view, manage, and unblock these plugins directly inside the <strong>Plugin Manager</strong>.</li>
                <li><strong>Configurable Capture Delay:</strong> Heavy graphics or GPU-based plugins might require extra time to render completely. Adjust the capture delay setting (in frames) in the Settings panel to ensure clean, noise-free thumbnails.</li>
                <li><strong>Default Illustrations:</strong> A set of default illustrations is included for common plugin categories to keep your library looking pristine from day one.</li>
              </ul>
              <div style="margin-top: 1.5rem; padding: 1rem; border-radius: var(--radius); border: 1px solid rgba(220, 62, 54, 0.25); background-color: rgba(220, 62, 54, 0.05); color: var(--ink);">
                <strong style="color: #dc3e36; display: block; margin-bottom: 0.5rem;">⚠️ Host Stability & Crash Recovery:</strong>
                Batch scanning loads and instantiates each plugin in your library. Some third-party plugins (especially those with compatibility wrappers or copy-protection initialization issues) may crash REAPER. If a crash occurs:
                <ol style="margin-top: 0.5rem; margin-bottom: 0; padding-left: 1.25rem;">
                  <li>Simply relaunch REAPER. VfxM's startup recovery will automatically blocklist the crashed plugin.</li>
                  <li>Open VfxM, click the <strong>Plugin Manager</strong> button, and click <strong>Resume Crashed Scan</strong> to safely resume scanning from where it stopped. It will automatically skip the crashed plugin.</li>
                  <li><strong>How to Unblock:</strong> Manage blocked plugins directly from the <strong>Stability & Blocklist</strong> section in the <strong>Plugin Manager</strong> window. Unblock individual plugins by clicking the <strong>X</strong> button next to their name, or click <strong>Clear Blocklist</strong> to unblock all.</li>
                </ol>
                <p style="margin-top: 0.5rem; font-size: 0.9rem;"><em>Note:</em> If your library contains multiple unstable plugins, you may have to run the scan process several times, restarting REAPER after each crash, until all problematic plugins are blocklisted and the entire library is processed. Additionally, you may need to run the scan multiple times and generate thumbnails multiple times, or manually capture specific thumbnails, to ensure all plugins are captured successfully.</p>
              </div>
              <div style="margin-top: 1rem; padding: 1rem; border-radius: var(--radius); border: 1px solid var(--accent-line); background-color: var(--accent-soft); color: var(--ink);">
                <strong style="color: var(--accent-strong); display: block; margin-bottom: 0.5rem;">💾 Storage Requirements:</strong>
                Generating visual thumbnails for large libraries requires local disk space (each cropped screenshot takes approximately 20KB–80KB). Ensure your system drive has sufficient free storage before scanning your entire library.
              </div>
            </div>`
        },
        {
          id: "track-insertion",
          title: "3. Core Track Insertion (Drag & Drop, Double-Click)",
          content: `<div>
              <p>Insert processors into your mixing sessions without clicking through nested context menus:</p>
              <ul>
                <li><strong>Double-Click:</strong> Double-clicking any plugin item inside the card browser or list view loads it instantly onto the currently selected REAPER track.</li>
                <li><strong>Drag & Drop:</strong> Drag a plugin card directly from the Virtue window and drop it onto a track control panel, mixer channel strip, or empty arranger space (which will automatically create a new track).</li>
                <li><strong>Batch Insertion:</strong> Select multiple plugins using **Ctrl+Click** or **Cmd+Click** (Mac), then drag or double-click to load the entire chain sequentially onto the track.</li>
              </ul>
            </div>`
        },
        {
          id: "status-circles",
          title: "4. Plugin Status Circles (Listed vs Unlisted)",
          content: `<div>
              <p>Keep your library clean by filtering out utility, duplicate, or unneeded plugins using the firewall system:</p>
              <div style="display: flex; gap: 1.5rem; margin: 1rem 0; flex-wrap: wrap">
                <div style="flex: 1 1 200px; padding: 1rem; border-radius: 8px; border: 1px solid var(--line); background-color: rgba(46, 204, 113, 0.08)">
                  <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem">
                    <span style="display: inline-block; width: 10px; height: 10px; border-radius: 50%; background-color: #2ecc71"></span>
                    <strong>Green (Listed / Active):</strong>
                  </div>
                  <p style="margin: 0; font-size: 0.9rem">Visible in search lists. This indicates the plugin is active and available to load.</p>
                </div>
                <div style="flex: 1 1 200px; padding: 1rem; border-radius: 8px; border: 1px solid var(--line); background-color: rgba(220, 62, 54, 0.08)">
                  <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem">
                    <span style="display: inline-block; width: 10px; height: 10px; border-radius: 50%; background-color: #dc3e36"></span>
                    <strong>Red (Unlisted / Hidden):</strong>
                  </div>
                  <p style="margin: 0; font-size: 0.9rem">Hidden from active browsing to prevent clutter. Right-click and choose "Force Reactivate" to restore.</p>
                </div>
              </div>
            </div>`
        },
        {
          id: "color-codes",
          title: "5. Rating & Category Color Codes",
          content: `<div>
              <p>Virtue assigns color codes to plugin categories and formats to help you identify tools at a glance. Enabling the "Color list by category" option in the settings menu (gear icon) colors list entries dynamically in the plugin list view:</p>
              <div style="overflow-x: auto">
                <table style="width: 100%; border-collapse: collapse; margin-top: 1rem; font-size: 0.9rem">
                  <thead>
                    <tr style="border-bottom: 2px solid var(--line); text-align: left">
                      <th style="padding: 0.75rem">Color Dot</th>
                      <th style="padding: 0.75rem">Audio Category</th>
                      <th style="padding: 0.75rem">Examples / Match Keys</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style="border-bottom: 1px solid var(--line)">
                      <td style="padding: 0.75rem; display: flex; align-items: center; gap: 0.5rem">
                        <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background-color: #33b8ff"></span> Blue
                      </td>
                      <td style="padding: 0.75rem"><strong>EQ & Filters</strong></td>
                      <td style="padding: 0.75rem">EQ, Equalizer, Filter, Dynamic EQ</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--line)">
                      <td style="padding: 0.75rem; display: flex; align-items: center; gap: 0.5rem">
                        <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background-color: #ff9433"></span> Orange
                      </td>
                      <td style="padding: 0.75rem"><strong>Dynamics & Compressors</strong></td>
                      <td style="padding: 0.75rem">Compressor, Limiter, Gate, Expander, Transient Shaper</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--line)">
                      <td style="padding: 0.75rem; display: flex; align-items: center; gap: 0.5rem">
                        <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background-color: #b27aff"></span> Purple
                      </td>
                      <td style="padding: 0.75rem"><strong>Reverb & Space</strong></td>
                      <td style="padding: 0.75rem">Reverb, Space, Room, Plate, Hall, Convolution</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--line)">
                      <td style="padding: 0.75rem; display: flex; align-items: center; gap: 0.5rem">
                        <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background-color: #2edbd1"></span> Teal
                      </td>
                      <td style="padding: 0.75rem"><strong>Delay & Echo</strong></td>
                      <td style="padding: 0.75rem">Delay, Echo, Tape Delay</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--line)">
                      <td style="padding: 0.75rem; display: flex; align-items: center; gap: 0.5rem">
                        <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background-color: #56e673"></span> Green
                      </td>
                      <td style="padding: 0.75rem"><strong>Modulation</strong></td>
                      <td style="padding: 0.75rem">Chorus, Flanger, Phaser, Tremolo, Vibrato, Rotary</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--line)">
                      <td style="padding: 0.75rem; display: flex; align-items: center; gap: 0.5rem">
                        <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background-color: #ff6cbe"></span> Pink
                      </td>
                      <td style="padding: 0.75rem"><strong>Instruments & Synths</strong></td>
                      <td style="padding: 0.75rem">Synth, Sampler, VSTi, VST3i, AUi, Drums, Piano</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--line)">
                      <td style="padding: 0.75rem; display: flex; align-items: center; gap: 0.5rem">
                        <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background-color: #ff473d"></span> Red
                      </td>
                      <td style="padding: 0.75rem"><strong>Distortion & Saturation</strong></td>
                      <td style="padding: 0.75rem">Distortion, Saturation, Amp, Cabinet, Drive, Fuzz</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--line)">
                      <td style="padding: 0.75rem; display: flex; align-items: center; gap: 0.5rem">
                        <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background-color: #b7bcca"></span> Grey
                      </td>
                      <td style="padding: 0.75rem"><strong>Utility & Meters</strong></td>
                      <td style="padding: 0.75rem">Utility, Meter, Analyzer, Scope, Tool</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--line)">
                      <td style="padding: 0.75rem; display: flex; align-items: center; gap: 0.5rem">
                        <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background-color: #ffd63d"></span> Yellow
                      </td>
                      <td style="padding: 0.75rem"><strong>MIDI Processors</strong></td>
                      <td style="padding: 0.75rem">MIDI Chorder, Arpeggiator, Routing Tools</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="color-list-demo-placeholder"></div>
            </div>`
        },
        {
          id: "favorites-organization",
          title: "6. Favorites Tabs & Custom Lists",
          content: `<div>
              <p>Store your go-to mixing chains and instrument configurations into dedicated custom groups:</p>
              <ul>
                <li><strong>Creating Tabs:</strong> Right-click the Favorites tab headers to create a new tab. You can rename tabs by double-clicking them, or drag tabs horizontally to reorder their position.</li>
                <li><strong>Adding Favorites:</strong> Select a plugin in the browser and click the "Favorite Selected" button, or right-click the plugin and add it to your active tab.</li>
                <li><strong>Focused Plug-in Capture:</strong> Focus any floating plugin window in REAPER and click "Favorite Selected". Virtue FX Manager will automatically match the active plug-in and prompt you to save either a clean/fresh plug-in entry or capture the current knob settings as an FX Preset snapshot.</li>
                <li><strong>FX Presets & Chains:</strong> Save complete tracks as FX chains in REAPER, and pin them inside Virtue tabs for instant, single-click complex recall.</li>
                <li><strong>Custom Notes:</strong> Select a plugin and type notes, routing suggestions, or track tips directly in the Notes panel. These persist across all sessions.</li>
              </ul>
            </div>`
        },
        {
          id: "keyboard-shortcuts",
          title: "7. Keyboard Shortcuts Cheat Sheet",
          content: `<div>
              <p>Operate the manager completely from your computer keyboard for maximum efficiency:</p>
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1rem; margin-top: 1rem">
                <div style="padding: 1rem; border-radius: 8px; border: 1px solid var(--line); background-color: var(--surface)">
                  <code style="color: var(--accent); font-weight: bold">Arrows (Up / Down)</code>
                  <p style="margin: 0.25rem 0 0 0; font-size: 0.85rem">Navigate through plugins in the browser list.</p>
                </div>
                <div style="padding: 1rem; border-radius: 8px; border: 1px solid var(--line); background-color: var(--surface)">
                  <code style="color: var(--accent); font-weight: bold">Enter / Return</code>
                  <p style="margin: 0.25rem 0 0 0; font-size: 0.85rem">Insert the selected plugin onto active track.</p>
                </div>
                <div style="padding: 1rem; border-radius: 8px; border: 1px solid var(--line); background-color: var(--surface)">
                  <code style="color: var(--accent); font-weight: bold">Esc (Escape)</code>
                  <p style="margin: 0.25rem 0 0 0; font-size: 0.85rem">Close settings panel, popups, or main window.</p>
                </div>
                <div style="padding: 1rem; border-radius: 8px; border: 1px solid var(--line); background-color: var(--surface)">
                  <code style="color: var(--accent); font-weight: bold">F</code>
                  <p style="margin: 0.25rem 0 0 0; font-size: 0.85rem">Focus selection back onto the browser list.</p>
                </div>
                <div style="padding: 1rem; border-radius: 8px; border: 1px solid var(--line); background-color: var(--surface)">
                  <code style="color: var(--accent); font-weight: bold">Shift + Click</code>
                  <p style="margin: 0.25rem 0 0 0; font-size: 0.85rem">Select a contiguous range of plugins for batch load.</p>
                </div>
                <div style="padding: 1rem; border-radius: 8px; border: 1px solid var(--line); background-color: var(--surface)">
                  <code style="color: var(--accent); font-weight: bold">Cmd / Ctrl + Click</code>
                  <p style="margin: 0.25rem 0 0 0; font-size: 0.85rem">Toggle selection of individual plugins.</p>
                </div>
                <div style="padding: 1rem; border-radius: 8px; border: 1px solid var(--line); background-color: var(--surface)">
                  <code style="color: var(--accent); font-weight: bold">Cmd / Ctrl + C / V</code>
                  <p style="margin: 0.25rem 0 0 0; font-size: 0.85rem">Copy and Paste thumbnail crop graphics from clipboard.</p>
                </div>
                <div style="padding: 1rem; border-radius: 8px; border: 1px solid var(--line); background-color: var(--surface)">
                  <code style="color: var(--accent); font-weight: bold">Cmd / Ctrl + Z / Shift+Z</code>
                  <p style="margin: 0.25rem 0 0 0; font-size: 0.85rem">Undo and Redo crop position changes in the editor.</p>
                </div>
              </div>
            </div>`
        }
      ]
    },
    zh: {
      title: "Virtue FX Manager 维基与使用文档",
      subtitle: "学习如何在 REAPER 软件中快速且直观地管理、筛选和载入您庞大的音频插件库。",
      langSelectLabel: "选择语言",
      tableOfContents: "目录导读",
      searchPlaceholder: "搜索帮助...",
      breadcrumbsHome: "帮助",
      categories: {
        setup: "安装与配置",
        workflows: "核心工作流",
        organization: "库组织管理",
        shortcuts: "键盘快捷键"
      },
      sections: [
        {
          id: "getting-started",
          title: "1. 快速入门与扫描设置",
          content: `<div>
              <p>当您首次在 REAPER 中启动 Virtue FX Manager 时，它会读取 REAPER 的插件缓存来生成列表。若要保持缓存同步，请注意：</p>
              <ul>
                <li><strong>自动缓存同步：</strong> Virtue 会自动检测新扫描的插件。若有插件缺失，请在 REAPER 中运行扫描（<em>Options &gt; Preferences &gt; Plug-ins &gt; VST &gt; Re-scan</em>）。</li>
                <li><strong>扫描目录：</strong> 在设置面板（齿轮图标）中，确保指定的系统插件路径与您的插件安装位置完全一致。</li>
                <li><strong>语言设置：</strong> 选择您偏好的界面语言。应用将自动切换菜单、状态栏和提示信息。</li>
              </ul>
            <div style="margin-top: 1.5rem; padding: 1rem; border-radius: var(--radius); border: 1px solid var(--accent-line); background-color: var(--accent-soft); color: var(--ink);">
                <strong style="color: var(--accent-strong); display: block; margin-bottom: 0.5rem;">🚀 快速上手工作流程（操作指南）：</strong>
                <ol style="margin: 0; padding-left: 1.25rem; font-size: 0.95rem; line-height: 1.6;">
                  <li><strong>初始设置：</strong> 在 REAPER 中启动 VfxM，验证您的语言选择，并在“设置”中确认插件路径。</li>
                  <li><strong>扫描您的插件库：</strong> 前往“设置”（齿轮图标），点击<strong>生成缩略图</strong>，选择<strong>扫描所有缺失项</strong>，让自动扫描器构建您的视觉库。如果发生崩溃，请重启 REAPER 并恢复扫描。</li>
                  <li><strong>手动捕获：</strong> 对于任何已列入黑名单或离线的插件，在 REAPER 中浮动插件窗口，在 VfxM 中悬停，然后点击<strong>相机图标</strong>进行手动截屏。</li>
                  <li><strong>清理杂乱：</strong> 右键点击并选择<strong>隐藏 / 取消列出</strong>，将您不需要的试用版本或实用插件防火墙化。</li>
                  <li><strong>创建工作板：</strong> 点击 <strong>+</strong> 标签图标创建一个新的工作板（例如“人声”），拖入您喜爱的插件，并使用评分进行排序。</li>
                  <li><strong>插入与混音：</strong> 双击任何卡片或直接拖放到您的轨道上即可立即加载。</li>
                </ol>
              </div>
            </div>`
        },
        {
          id: "visual-thumbnails",
          title: "2. 视觉缩略图系统与相机截图工具",
          content: `<div>
              <p>Virtue FX Manager 以直观视觉为主导。您可以通过插件的实际界面进行浏览，而非单调的文本列表：</p>
              <ul>
                <li><strong>网格视图与列表视图：</strong> 使用浏览器顶部的切换按钮，在图形化的卡片布局与详尽的电子表格列表视图之间快速切换。</li>
                <li><strong>内置相机截图：</strong> 在 REAPER 中打开目标插件界面，在 Virtue 中将鼠标悬停在插件项上，然后点击<strong>相机图标</strong>即可立即捕获、裁剪并存储自定义截图。完全支持剪贴板命令（<kbd>Cmd/Ctrl + C/V</kbd>）以及撤销/重做（<kbd>Cmd/Ctrl + Z / Shift+Z</kbd>）。</li>
                <li><strong>自动缩略图扫描器：</strong> 使用内置的批量扫描实用程序（可通过顶栏 Settings 旁的 <strong>Plugin Manager</strong> 窗口访问），在几分钟内自动构建您的整个视觉库。使用自动完成建议过滤并扫描特定开发商（如 Waves）的插件，并通过选择重新生成模式刷新缩略图以清除黄色试用版水印。它在后台运行，将每个插件依次加载到临时轨道上，捕获其图形界面并保存到您的网格中。</li>
                <li><strong>DAW 崩溃预防与黑名单：</strong> 为了防止扫描过程中由于不稳定插件导致的崩溃循环，VfxM 会检查外部路径是否在线，忽略未列出/隐藏的插件，并自动将任何导致崩溃的插件加入黑名单，在后续运行中跳过它们。您可以在 <strong>Plugin Manager</strong> 窗口的<strong>稳定性与黑名单</strong>部分管理并取消阻止这些插件。</li>
                <li><strong>可配置的捕获延迟：</strong> 渲染缓慢或基于 GPU 的插件可能需要额外的时间才能完全渲染。在“设置”面板中调整捕获延迟设置（以帧为单位），以确保获得清晰、无噪点的缩略图。</li>
                <li><strong>默认插图：</strong> 我们为常用插件类别配备了精美的默认缩略插图，确保您在第一天使用时便能拥有完美的视觉观感。</li>
              </ul>
              <div style="margin-top: 1.5rem; padding: 1rem; border-radius: var(--radius); border: 1px solid rgba(220, 62, 54, 0.25); background-color: rgba(220, 62, 54, 0.05); color: var(--ink);">
                <strong style="color: #dc3e36; display: block; margin-bottom: 0.5rem;">⚠️ 主机稳定性与崩溃恢复：</strong>
                批量扫描会加载并实例化您库中的每个插件。某些第三方插件（特别是具有兼容性外壳或版权保护初始化问题的插件）可能会导致 REAPER 崩溃。如果发生崩溃：
                <ol style="margin-top: 0.5rem; margin-bottom: 0; padding-left: 1.25rem;">
                  <li>只需重新启动 REAPER。VfxM 的启动恢复机制会自动将崩溃的插件加入黑名单进行处理。</li>
                  <li>打开 VfxM，点击 **Plugin Manager** 按钮，然后点击 **Resume Crashed Scan** 以从停止的位置恢复扫描。它会自动跳过崩溃的插件，并安全地继续扫描库中的其他插件。</li>
                  <li><strong>如何取消阻止：</strong>直接在 **Plugin Manager** 窗口的**稳定性与黑名单**部分中管理被阻止的插件。点击插件名称旁的 **X** 按钮可以取消阻止单个插件，或者点击 **Clear Blocklist** 取消阻止所有插件。</li>
                </ol>
                <p style="margin-top: 0.5rem; font-size: 0.9rem;"><em>提示：</em>如果您的插件库中包含多个不稳定的插件，您可能需要运行扫描过程数次（每次崩溃后重启 REAPER），直到所有有问题的插件都被加入黑名单并处理完整个库。此外，您可能需要多次运行扫描并多次生成缩略图，或者手动捕获特定的缩略图，以确保所有插件都已成功捕获。</p>
              </div>
              <div style="margin-top: 1rem; padding: 1rem; border-radius: var(--radius); border: 1px solid var(--accent-line); background-color: var(--accent-soft); color: var(--ink);">
                <strong style="color: var(--accent-strong); display: block; margin-bottom: 0.5rem;">💾 存储空间要求：</strong>
                为大型插件库生成视觉缩略图需要本地磁盘空间（每个裁剪后的截图大约占用 20KB–80KB）。在扫描整个插件库之前，请确保您的系统盘有足够的可用存储空间。
              </div>
            </div>`
        },
        {
          id: "track-insertion",
          title: "3. 轨道插入操作 (拖拽和双击)",
          content: `<div>
              <p>无需层层查找复杂的右键菜单，一键即可将插件载入您的混音轨道中：</p>
              <ul>
                <li><strong>鼠标双击：</strong> 在卡片浏览器或列表视图中双击任何插件，即可将其载入 REAPER 当前选中的轨道。</li>
                <li><strong>拖拽载入：</strong> 直接从 Virtue 窗口中将插件卡片拖拽到轨道控制面板、混音器通道条或轨道空白区域（在空白处释放将自动创建新轨道）。</li>
                <li><strong>批量加载：</strong> 使用 **Ctrl+单击** 或 **Cmd+单击** (Mac) 选中多个插件，然后拖拽或双击，即可按顺序批量加载至当前轨道。</li>
              </ul>
            </div>`
        },
        {
          id: "status-circles",
          title: "4. 插件状态圆点 (Listed 与 Unlisted)",
          content: `<div>
              <p>使用防火墙过滤机制隐藏多余、重复或辅助性质的插件，保持插件库的清爽：</p>
              <div style="display: flex; gap: 1.5rem; margin: 1rem 0; flex-wrap: wrap">
                <div style="flex: 1 1 200px; padding: 1rem; border-radius: 8px; border: 1px solid var(--line); background-color: rgba(46, 204, 113, 0.08)">
                  <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem">
                    <span style="display: inline-block; width: 10px; height: 10px; border-radius: 50%; background-color: #2ecc71"></span>
                    <strong>绿色 (Listed / 启用)：</strong>
                  </div>
                  <p style="margin: 0; font-size: 0.9rem">在浏览列表中可见。表示此插件处于活跃状态，可随时被载入使用。</p>
                </div>
                <div style="flex: 1 1 200px; padding: 1rem; border-radius: 8px; border: 1px solid var(--line); background-color: rgba(220, 62, 54, 0.08)">
                  <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem">
                    <span style="display: inline-block; width: 10px; height: 10px; border-radius: 50%; background-color: #dc3e36"></span>
                    <strong>红色 (Unlisted / 隐藏)：</strong>
                  </div>
                  <p style="margin: 0; font-size: 0.9rem">已在快速浏览中隐藏。可在插件上右键并选择“强制重新激活”将其恢复显示。</p>
                </div>
              </div>
            </div>`
        },
        {
          id: "color-codes",
          title: "5. 评分与分类色彩标识",
          content: `<div>
              <p>Virtue 根据插件的音频分类和格式分配了色彩标识。在设置菜单（齿轮图标）中启用“按分类显示颜色”后，列表视图中的插件名称将动态显示对应的色彩：</p>
              <div style="overflow-x: auto">
                <table style="width: 100%; border-collapse: collapse; margin-top: 1rem; font-size: 0.9rem">
                  <thead>
                    <tr style="border-bottom: 2px solid var(--line); text-align: left">
                      <th style="padding: 0.75rem">颜色圆点</th>
                      <th style="padding: 0.75rem">音频分类</th>
                      <th style="padding: 0.75rem">示例与匹配名称</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style="border-bottom: 1px solid var(--line)">
                      <td style="padding: 0.75rem; display: flex; align-items: center; gap: 0.5rem">
                        <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background-color: #33b8ff"></span> 蓝色
                      </td>
                      <td style="padding: 0.75rem"><strong>均衡与滤波器 (EQ & Filters)</strong></td>
                      <td style="padding: 0.75rem">EQ, Equalizer, Filter, 动态均衡</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--line)">
                      <td style="padding: 0.75rem; display: flex; align-items: center; gap: 0.5rem">
                        <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background-color: #ff9433"></span> 橙色
                      </td>
                      <td style="padding: 0.75rem"><strong>动态与压缩器 (Dynamics)</strong></td>
                      <td style="padding: 0.75rem">Compressor, Limiter, 门限器, 瞬态塑形</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--line)">
                      <td style="padding: 0.75rem; display: flex; align-items: center; gap: 0.5rem">
                        <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background-color: #b27aff"></span> 紫色
                      </td>
                      <td style="padding: 0.75rem"><strong>混响与空间 (Reverb & Space)</strong></td>
                      <td style="padding: 0.75rem">Reverb, Space, Room, 卷积混响</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--line)">
                      <td style="padding: 0.75rem; display: flex; align-items: center; gap: 0.5rem">
                        <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background-color: #2edbd1"></span> 青色
                      </td>
                      <td style="padding: 0.75rem"><strong>延迟与回声 (Delay & Echo)</strong></td>
                      <td style="padding: 0.75rem">Delay, Echo, 模拟延迟</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--line)">
                      <td style="padding: 0.75rem; display: flex; align-items: center; gap: 0.5rem">
                        <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background-color: #56e673"></span> 绿色
                      </td>
                      <td style="padding: 0.75rem"><strong>调制效果 (Modulation)</strong></td>
                      <td style="padding: 0.75rem">Chorus, Flanger, Phaser, 合唱, 颤音</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--line)">
                      <td style="padding: 0.75rem; display: flex; align-items: center; gap: 0.5rem">
                        <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background-color: #ff6cbe"></span> 粉色
                      </td>
                      <td style="padding: 0.75rem"><strong>乐器与合成器 (Instruments)</strong></td>
                      <td style="padding: 0.75rem">Synth, Sampler, VSTi, 虚拟合成器, 鼓机, 钢琴</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--line)">
                      <td style="padding: 0.75rem; display: flex; align-items: center; gap: 0.5rem">
                        <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background-color: #ff473d"></span> 红色
                      </td>
                      <td style="padding: 0.75rem"><strong>失真与饱和 (Distortion)</strong></td>
                      <td style="padding: 0.75rem">Distortion, Saturation, 吉他箱模, 驱动, 过载</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--line)">
                      <td style="padding: 0.75rem; display: flex; align-items: center; gap: 0.5rem">
                        <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background-color: #b7bcca"></span> 灰色
                      </td>
                      <td style="padding: 0.75rem"><strong>辅助工具与仪表 (Utility)</strong></td>
                      <td style="padding: 0.75rem">Utility, Meter, Analyzer, 示波器, 频谱仪</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--line)">
                      <td style="padding: 0.75rem; display: flex; align-items: center; gap: 0.5rem">
                        <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background-color: #ffd63d"></span> 黄色
                      </td>
                      <td style="padding: 0.75rem"><strong>MIDI 处理器</strong></td>
                      <td style="padding: 0.75rem">MIDI Chorder, 和弦器, 琶音器</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="color-list-demo-placeholder"></div>
            </div>`
        },
        {
          id: "favorites-organization",
          title: "6. 收藏夹分组与自定义插件列表",
          content: `<div>
              <p>将您最常用的插件链和乐器配置分类保存，以便混音时快速调用：</p>
              <ul>
                <li><strong>创建收藏夹分组：</strong> 右键点击收藏栏顶部选项卡，即可新建分组。双击选项卡进行重命名，或水平拖动选项卡调整其先后位置。</li>
                <li><strong>添加收藏：</strong> 在浏览器中选中任意插件，点击下方的“添加到收藏”按钮，或在插件条目上右键将其添至当前分组。</li>
                <li><strong>FX 预设与链：</strong> 将 REAPER 轨道保存为 FX Chain 后，可将其直接置于 Virtue 分组中，实现复杂插件链的一键复原。</li>
                <li><strong>自定义笔记：</strong> 选中插件后，可以在右下角的笔记面板中直接输入该插件的心得或混音贴士，该信息将在全局跨项目保存。</li>
              </ul>
            </div>`
        },
        {
          id: "keyboard-shortcuts",
          title: "7. 键盘快捷键一览表",
          content: `<div>
              <p>为了让您的创作更具效率，您可以完全通过键盘对 Virtue 进行快捷掌控：</p>
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1rem; margin-top: 1rem">
                <div style="padding: 1rem; border-radius: 8px; border: 1px solid var(--line); background-color: var(--surface)">
                  <code style="color: var(--accent); font-weight: bold">方向键 (↑ / ↓)</code>
                  <p style="margin: 0.25rem 0 0 0; font-size: 0.85rem">在插件列表中向上或向下切换选中插件。</p>
                </div>
                <div style="padding: 1rem; border-radius: 8px; border: 1px solid var(--line); background-color: var(--surface)">
                  <code style="color: var(--accent); font-weight: bold">回车键 (Enter / Return)</code>
                  <p style="margin: 0.25rem 0 0 0; font-size: 0.85rem">将当前选中的插件立即载入活跃轨道。</p>
                </div>
                <div style="padding: 1rem; border-radius: 8px; border: 1px solid var(--line); background-color: var(--surface)">
                  <code style="color: var(--accent); font-weight: bold">Esc 键 (Escape)</code>
                  <p style="margin: 0.25rem 0 0 0; font-size: 0.85rem">关闭设置面板、弹出框或主窗口。</p>
                </div>
                <div style="padding: 1rem; border-radius: 8px; border: 1px solid var(--line); background-color: var(--surface)">
                  <code style="color: var(--accent); font-weight: bold">F 键</code>
                  <p style="margin: 0.25rem 0 0 0; font-size: 0.85rem">将键盘焦点重新聚焦回插件浏览列表。</p>
                </div>
                <div style="padding: 1rem; border-radius: 8px; border: 1px solid var(--line); background-color: var(--surface)">
                  <code style="color: var(--accent); font-weight: bold">Shift + 单击</code>
                  <p style="margin: 0.25rem 0 0 0; font-size: 0.85rem">选中一系列连续的插件，以便于批量加载。</p>
                </div>
                <div style="padding: 1rem; border-radius: 8px; border: 1px solid var(--line); background-color: var(--surface)">
                  <code style="color: var(--accent); font-weight: bold">Cmd / Ctrl + 单击</code>
                  <p style="margin: 0.25rem 0 0 0; font-size: 0.85rem">不连续地多选特定的数个插件。</p>
                </div>
              </div>
            </div>`
        }
      ]
    },
    pt: {
      title: "Wiki e Documentação do Virtue FX Manager",
      subtitle: "Aprenda a organizar visualmente, filtrar e carregar instantaneamente sua enorme biblioteca de plugins dentro do REAPER.",
      langSelectLabel: "Selecionar Idioma",
      tableOfContents: "Tabela de Conteúdo",
      searchPlaceholder: "Pesquisar ajuda...",
      breadcrumbsHome: "Ajuda",
      categories: {
        setup: "Instalação & Configuração",
        workflows: "Fluxos de Trabalho Principais",
        organization: "Organização da Biblioteca",
        shortcuts: "Atalhos do Teclado"
      },
      sections: [
        {
          id: "getting-started",
          title: "1. Introdução e Configuração de Escaneamento",
          content: `<div>
              <p>Ao abrir o Virtue FX Manager no REAPER pela primeira vez, ele lê a cache de plugins do seu DAW. Para certificar-se de que está tudo sincronizado:</p>
              <ul>
                <li><strong>Sincronização Automática:</strong> O Virtue detecta automaticamente novos plugins escaneados. Caso falte algum, rode um escaneamento normal no REAPER (<em>Options &gt; Preferences &gt; Plug-ins &gt; VST &gt; Re-scan</em>).</li>
                <li><strong>Diretórios de Escaneamento:</strong> No menu de Configurações (ícone de engrenagem), certifique-se de que os caminhos de pastas de plugins coincidem com as locais onde instalou seus programas.</li>
                <li><strong>Configuração de Idioma:</strong> Escolha seu idioma preferido no menu. O aplicativo traduzirá dinamicamente menus, caixas de status e explicações breves (tooltips).</li>
              </ul>
            <div style="margin-top: 1.5rem; padding: 1rem; border-radius: var(--radius); border: 1px solid var(--accent-line); background-color: var(--accent-soft); color: var(--ink);">
                <strong style="color: var(--accent-strong); display: block; margin-bottom: 0.5rem;">🚀 Fluxo de Trabalho de Início Rápido (Como Proceder):</strong>
                <ol style="margin: 0; padding-left: 1.25rem; font-size: 0.95rem; line-height: 1.6;">
                  <li><strong>Configuração Inicial:</strong> Inicie o VfxM no REAPER, verifique a seleção do idioma e confirme os caminhos dos plugins nas Configurações.</li>
                  <li><strong>Verificar Biblioteca:</strong> Abra a janela do <strong>Plugin Manager</strong> (botão ao lado de Configurações), escolha o modo de escaneamento e clique em <strong>Iniciar Escaneamento</strong> para construir sua biblioteca visual. Reinicie o REAPER e clique em <strong>Retomar Escaneamento</strong> se ocorrer algum travamento.</li>
                  <li><strong>Captura Manual:</strong> Para qualquer plugin na lista de bloqueio ou offline, abra a janela do plugin no REAPER, passe o mouse nele no VfxM e clique no <strong>Ícone de Câmera</strong> para capturar a tela manualmente.</li>
                  <li><strong>Organizar Clutter:</strong> Clique com o botão direito e escolha <strong>Ocultar / Remover da lista</strong> para isolar versões de teste ou utilitários desnecessários.</li>
                  <li><strong>Criar Painéis:</strong> Clique no ícone de guia <strong>+</strong> para criar um novo painel (por exemplo, "Vocais"), arraste seus plugins favoritos para ele e organize-os usando classificações.</li>
                  <li><strong>Inserir e Mixar:</strong> Dê um duplo clique em qualquer cartão ou arraste-o diretamente para as pistas para carregá-los instantaneamente.</li>
                </ol>
              </div>
            </div>`
        },
        {
          id: "visual-thumbnails",
          title: "2. Sistema de Miniaturas Visuais e Utilitário de Câmera",
          content: `<div>
              <p>O Virtue FX Manager é construído em torno de um fluxo visual. Você pode navegar pelos seus plugins por suas interfaces reais em vez de linhas de texto genéricas:</p>
              <ul>
                <li><strong>Visualização em Grade vs. Lista:</strong> Alterne entre o layout gráfico de cartões e a visualização de lista em planilha de metadados usando os botões de alternância na parte superior do navegador.</li>
                <li><strong>Captura com Câmera Integrada:</strong> Abra a interface do plugin desejado no REAPER, passe o mouse sobre o plugin no Virtue e clique no <strong>Ícone de Câmera</strong> para capturar, cortar e salvar instantaneamente uma captura de tela personalizada. Atalhos de área de transferência (<kbd>Cmd/Ctrl + C/V</kbd>) e desfazer/refazer (<kbd>Cmd/Ctrl + Z / Shift+Z</kbd>) são totalmente suportados.</li>
                <li><strong>Scanner Automático de Miniaturas:</strong> Use o utilitário de digitalização em lote integrado (acessível pelo painel do <strong>Plugin Manager</strong> ao lado de Configurações) para construir sua biblioteca visual inteira em minutos. Filtre por desenvolvedor específico (como Waves) com autocompletar e regenere miniaturas (para remover barras amarelas de demo) selecionando o modo de regeneração. Ele roda em segundo plano, carregando cada plugin sequencialmente em uma pista temporária, capturando sua interface gráfica e salvando-a em sua grade.</li>
                <li><strong>Prevenção de Travamentos do DAW e Lista de Bloqueio:</strong> Para evitar loops de travamento causados por plugins instáveis durante uma digitalização, o VfxM verifica se caminhos externos estão online, ignora plugins não listados/ocultos e adiciona automaticamente qualquer plugin instável à lista de bloqueio, pulando-os em execuções subsequentes. Você pode gerenciar e desbloquear esses plugins diretamente na seção de lista de bloqueio no <strong>Plugin Manager</strong>.</li>
                <li><strong>Atraso de Captura Configurável:</strong> Plugins pesados de interface gráfica ou baseados em GPU podem precisar de tempo extra para carregar completamente. Ajuste o atraso de captura (em frames) no painel de Configurações para garantir miniaturas limpas e sem ruídos gráficos.</li>
                <li><strong>Ilustrações Padrão:</strong> Um conjunto de ilustrações padrão está incluído para categorias comuns de plugins para manter sua biblioteca organizada desde o primeiro dia.</li>
              </ul>
              <div style="margin-top: 1.5rem; padding: 1rem; border-radius: var(--radius); border: 1px solid rgba(220, 62, 54, 0.25); background-color: rgba(220, 62, 54, 0.05); color: var(--ink);">
                <strong style="color: #dc3e36; display: block; margin-bottom: 0.5rem;">⚠️ Estabilidade do Host e Recuperação de Travamentos:</strong>
                A digitalização em lote carrega e instancia cada plugin em sua biblioteca. Alguns plugins de terceiros (especialmente aqueles com wrappers de compatibilidade ou problemas de inicialização de proteção contra cópia) podem travar o REAPER. Se ocorrer um travamento:
                <ol style="margin-top: 0.5rem; margin-bottom: 0; padding-left: 1.25rem;">
                  <li>Basta reiniciar o REAPER. A recuperação de inicialização do VfxM adicionará automaticamente o plugin instável à lista de bloqueio.</li>
                  <li>Abra o VfxM, clique no botão <strong>Plugin Manager</strong> e clique em <strong>Retomar Escaneamento</strong> para continuar de onde parou. O plugin problemático será pulado automaticamente.</li>
                  <li><strong>Como Desbloquear:</strong> Gerencie os plugins bloqueados diretamente na seção <strong>Estabilidade & Lista de Bloqueio</strong> no <strong>Plugin Manager</strong>. Desbloqueie individualmente clicando no botão <strong>X</strong> ou limpe a lista inteira clicando em <strong>Clear Blocklist</strong>.</li>
                </ol>
                <p style="margin-top: 0.5rem; font-size: 0.9rem;"><em>Nota:</em> Se a sua biblioteca contiver múltiplos plugins instáveis, poderá ser necessário executar o processo de digitalização várias vezes, reiniciando o REAPER após cada travamento, até que todos os plugins problemáticos estejam na lista de bloqueio e toda a biblioteca seja processada. Além disso, pode ser necessário executar a digitalização várias vezes e gerar miniaturas várias vezes, ou capturar manualmente miniaturas específicas, para garantir que todos os plugins sejam capturados com sucesso.</p>
              </div>
              <div style="margin-top: 1rem; padding: 1rem; border-radius: var(--radius); border: 1px solid var(--accent-line); background-color: var(--accent-soft); color: var(--ink);">
                <strong style="color: var(--accent-strong); display: block; margin-bottom: 0.5rem;">💾 Requisitos de Armazenamento:</strong>
                A geração de miniaturas visuais para grandes bibliotecas requer espaço em disco local (cada captura de tela recortada ocupa aproximadamente 20KB–80KB). Certifique-se de que a unidade do seu sistema tenha armazenamento livre suficiente antes de verificar toda a biblioteca.
              </div>
            </div>`
        },
        {
          id: "track-insertion",
          title: "3. Inserção de Plugins (Arrastar & Soltar, Clique-Duplo)",
          content: `<div>
              <p>Insira processadores em suas pistas sem precisar navegar por infinitos menus aninhados:</p>
              <ul>
                <li><strong>Clique-Duplo:</strong> Dê dois cliques em qualquer plugin no navegador gráfico ou na lista de texto para carregá-lo instantaneamente na pista ativa selecionada do REAPER.</li>
                <li><strong>Arrastar e Soltar (Drag & Drop):</strong> Arraste o card do plugin de dentro da janela do Virtue e solte-o no painel de controle da track, nos canais da mesa de som (Mixer), ou no espaço vazio do arranjador (o que criará uma nova pista automaticamente).</li>
                <li><strong>Carregamento em Lote:</strong> Selecione múltiplos plugins usando **Ctrl+Clique** ou **Cmd+Clique** (Mac) e arraste-os de uma só vez para carregar a cadeia completa na pista de forma sequencial.</li>
              </ul>
            </div>`
        },
        {
          id: "status-circles",
          title: "4. Círculos de Status do Plugin (Listado vs Não Listado)",
          content: `<div>
              <p>Mantenha sua lista limpa escondendo utilitários ou duplicatas com o sistema de firewall:</p>
              <div style="display: flex; gap: 1.5rem; margin: 1rem 0; flex-wrap: wrap">
                <div style="flex: 1 1 200px; padding: 1rem; border-radius: 8px; border: 1px solid var(--line); background-color: rgba(46, 204, 113, 0.08)">
                  <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem">
                    <span style="display: inline-block; width: 10px; height: 10px; border-radius: 50%; background-color: #2ecc71"></span>
                    <strong>Verde (Listado / Ativo):</strong>
                  </div>
                  <p style="margin: 0; font-size: 0.9rem">Visível no navegador e nas buscas. O plugin está ativo e pronto para ser carregado.</p>
                </div>
                <div style="flex: 1 1 200px; padding: 1rem; border-radius: 8px; border: 1px solid var(--line); background-color: rgba(220, 62, 54, 0.08)">
                  <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem">
                    <span style="display: inline-block; width: 10px; height: 10px; border-radius: 50%; background-color: #dc3e36"></span>
                    <strong>Vermelho (Oculto / Unlisted):</strong>
                  </div>
                  <p style="margin: 0; font-size: 0.9rem">Oculto da navegação ativa para evitar desorganização. Clique com o botão direito e escolha "Forçar Reativação" para restaurar.</p>
                </div>
              </div>
            </div>`
        },
        {
          id: "color-codes",
          title: "5. Cores por Categorias de Áudio",
          content: `<div>
              <p>O Virtue associa cores a categorias de processadores e formatos para facilitar a identificação visual. Ao marcar a opção "Colorir lista por categoria" no menu de configurações (ícone de engrenagem), as linhas exibirão dinamicamente estas cores na visualização de lista:</p>
              <div style="overflow-x: auto">
                <table style="width: 100%; border-collapse: collapse; margin-top: 1rem; font-size: 0.9rem">
                  <thead>
                    <tr style="border-bottom: 2px solid var(--line); text-align: left">
                      <th style="padding: 0.75rem">Círculo</th>
                      <th style="padding: 0.75rem">Categoria de Áudio</th>
                      <th style="padding: 0.75rem">Termos Identificadores</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style="border-bottom: 1px solid var(--line)">
                      <td style="padding: 0.75rem; display: flex; align-items: center; gap: 0.5rem">
                        <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background-color: #33b8ff"></span> Azul
                      </td>
                      <td style="padding: 0.75rem"><strong>EQ & Filtros</strong></td>
                      <td style="padding: 0.75rem">EQ, Equalizer, Filter, Equalizador Dinâmico</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--line)">
                      <td style="padding: 0.75rem; display: flex; align-items: center; gap: 0.5rem">
                        <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background-color: #ff9433"></span> Laranja
                      </td>
                      <td style="padding: 0.75rem"><strong>Dinâmica & Compressores</strong></td>
                      <td style="padding: 0.75rem">Compressor, Limiter, Gate, Expander, Modelador de Transientes</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--line)">
                      <td style="padding: 0.75rem; display: flex; align-items: center; gap: 0.5rem">
                        <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background-color: #b27aff"></span> Roxo
                      </td>
                      <td style="padding: 0.75rem"><strong>Reverb & Espaço</strong></td>
                      <td style="padding: 0.75rem">Reverb, Space, Room, Plate, Hall, Convolução</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--line)">
                      <td style="padding: 0.75rem; display: flex; align-items: center; gap: 0.5rem">
                        <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background-color: #2edbd1"></span> Ciano
                      </td>
                      <td style="padding: 0.75rem"><strong>Delay & Eco</strong></td>
                      <td style="padding: 0.75rem">Delay, Echo, Delay de Fita</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--line)">
                      <td style="padding: 0.75rem; display: flex; align-items: center; gap: 0.5rem">
                        <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background-color: #56e673"></span> Verde
                      </td>
                      <td style="padding: 0.75rem"><strong>Modulação</strong></td>
                      <td style="padding: 0.75rem">Chorus, Flanger, Phaser, Tremolo, Vibrato</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--line)">
                      <td style="padding: 0.75rem; display: flex; align-items: center; gap: 0.5rem">
                        <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background-color: #ff6cbe"></span> Rosa
                      </td>
                      <td style="padding: 0.75rem"><strong>Instrumentos & Sintetizadores</strong></td>
                      <td style="padding: 0.75rem">Synth, Sampler, VSTi, Sintetizadores Virtuais, Bateria, Piano</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--line)">
                      <td style="padding: 0.75rem; display: flex; align-items: center; gap: 0.5rem">
                        <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background-color: #ff473d"></span> Vermelho
                      </td>
                      <td style="padding: 0.75rem"><strong>Distorção & Saturação</strong></td>
                      <td style="padding: 0.75rem">Distortion, Saturation, Amp, Simuladores, Overdrive, Fuzz</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--line)">
                      <td style="padding: 0.75rem; display: flex; align-items: center; gap: 0.5rem">
                        <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background-color: #b7bcca"></span> Cinza
                      </td>
                      <td style="padding: 0.75rem"><strong>Utilitários & Medidores</strong></td>
                      <td style="padding: 0.75rem">Utility, Meter, Analyzer, Osciloscópio, Analisador de Espectro</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--line)">
                      <td style="padding: 0.75rem; display: flex; align-items: center; gap: 0.5rem">
                        <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background-color: #ffd63d"></span> Amarelo
                      </td>
                      <td style="padding: 0.75rem"><strong>Processadores MIDI</strong></td>
                      <td style="padding: 0.75rem">MIDI Chorder, Arpejadores, Roteadores MIDI</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="color-list-demo-placeholder"></div>
            </div>`
        },
        {
          id: "favorites-organization",
          title: "6. Abas de Favoritos e Organização",
          content: `<div>
              <p>Mantenha seus plugins preferidos e cadeias organizados de forma personalizada:</p>
              <ul>
                <li><strong>Criar Abas:</strong> Clique com o botão direito nas abas de Favoritos para criar uma nova. Você pode renomear dando um duplo clique ou arrastar as abas na horizontal para reordená-las.</li>
                <li><strong>Adicionar aos Favoritos:</strong> Selecione um plugin no navegador principal e clique no botão "Favoritar Seleção", ou clique com o botão direito do mouse no plugin e envie para a aba atual.</li>
                <li><strong>Presets & Cadeias de FX:</strong> Salve cadeias completas no REAPER e fixe-as nas abas de favoritos do Virtue para chamadas complexas com um único clique.</li>
                <li><strong>Anotações (Notas):</strong> Escreva anotações específicas, rotas de estúdio ou dicas de uso para cada plugin. O Virtue mantém estas notas persistentes em qualquer projeto.</li>
              </ul>
            </div>`
        },
        {
          id: "keyboard-shortcuts",
          title: "7. Guia Rápido de Atalhos de Teclado",
          content: `<div>
              <p>Acelere seu fluxo de trabalho utilizando atalhos de teclado essenciais no painel do Virtue:</p>
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1rem; margin-top: 1rem">
                <div style="padding: 1rem; border-radius: 8px; border: 1px solid var(--line); background-color: var(--surface)">
                  <code style="color: var(--accent); font-weight: bold">Setas (Cima / Baixo)</code>
                  <p style="margin: 0.25rem 0 0 0; font-size: 0.85rem">Navega pela lista de plugins ativos no painel do Virtue.</p>
                </div>
                <div style="padding: 1rem; border-radius: 8px; border: 1px solid var(--line); background-color: var(--surface)">
                  <code style="color: var(--accent); font-weight: bold">Enter / Return</code>
                  <p style="margin: 0.25rem 0 0 0; font-size: 0.85rem">Insere o plugin selecionado na pista do REAPER em foco.</p>
                </div>
                <div style="padding: 1rem; border-radius: 8px; border: 1px solid var(--line); background-color: var(--surface)">
                  <code style="color: var(--accent); font-weight: bold">Esc (Escape)</code>
                  <p style="margin: 0.25rem 0 0 0; font-size: 0.85rem">Fecha menus flutuantes, popups de confirmação ou a janela principal.</p>
                </div>
                <div style="padding: 1rem; border-radius: 8px; border: 1px solid var(--line); background-color: var(--surface)">
                  <code style="color: var(--accent); font-weight: bold">F</code>
                  <p style="margin: 0.25rem 0 0 0; font-size: 0.85rem">Retorna o foco do teclado para a lista de busca de plugins.</p>
                </div>
                <div style="padding: 1rem; border-radius: 8px; border: 1px solid var(--line); background-color: var(--surface)">
                  <code style="color: var(--accent); font-weight: bold">Shift + Clique</code>
                  <p style="margin: 0.25rem 0 0 0; font-size: 0.85rem">Seleciona uma faixa de plugins adjacentes para inserção conjunta.</p>
                </div>
                <div style="padding: 1rem; border-radius: 8px; border: 1px solid var(--line); background-color: var(--surface)">
                  <code style="color: var(--accent); font-weight: bold">Cmd / Ctrl + Clique</code>
                  <p style="margin: 0.25rem 0 0 0; font-size: 0.85rem">Permite selecionar plugins variados de forma não contígua.</p>
                </div>
              </div>
            </div>`
        }
      ]
    },
    es: {
      title: "Wiki y Documentación de Virtue FX Manager",
      subtitle: "Aprenda a organizar visualmente, filtrar y cargar instantáneamente su biblioteca de plugins dentro de REAPER.",
      langSelectLabel: "Seleccionar Idioma",
      tableOfContents: "Índice de Contenidos",
      searchPlaceholder: "Buscar en la ayuda...",
      breadcrumbsHome: "Ayuda",
      categories: {
        setup: "Instalación y Configuración",
        workflows: "Flujos de Trabajo Principales",
        organization: "Organización de Biblioteca",
        shortcuts: "Atajos de Teclado"
      },
      sections: [
        {
          id: "getting-started",
          title: "1. Introducción y Configuración del Escaneo",
          content: `<div>
              <p>Al iniciar Virtue FX Manager en REAPER por primera vez, lee la caché de plugins del DAW para generar la lista. Para asegurar que todo esté sincronizado:</p>
              <ul>
                <li><strong>Sincronización Automática:</strong> Virtue detecta automáticamente los plugins escaneados. Si falta alguno, realice un escaneo normal en REAPER (<em>Options &gt; Preferences &gt; Plug-ins &gt; VST &gt; Re-scan</em>).</li>
                <li><strong>Directorios de Escaneo:</strong> En la sección de Configuración (icono de engranaje), verifique que las rutas de carpetas de plugins coincidan con las locales donde instaló sus programas.</li>
                <li><strong>Idioma de Interfaz:</strong> Seleccione el idioma que prefiera. Virtue traducirá de forma dinámica los menús, las barras de estado y los tooltips explicativos.</li>
              </ul>
            <div style="margin-top: 1.5rem; padding: 1rem; border-radius: var(--radius); border: 1px solid var(--accent-line); background-color: var(--accent-soft); color: var(--ink);">
                <strong style="color: var(--accent-strong); display: block; margin-bottom: 0.5rem;">🚀 Flujo de trabajo de inicio rápido (Cómo proceder):</strong>
                <ol style="margin: 0; padding-left: 1.25rem; font-size: 0.95rem; line-height: 1.6;">
                  <li><strong>Configuración inicial:</strong> Inicie VfxM en REAPER, verifique su selección de idioma y confirme las rutas de los plugins en la Configuración.</li>
                  <li><strong>Escanear su biblioteca:</strong> Abra la ventana del <strong>Plugin Manager</strong> (botón al lado de Configuración), elija el modo de escaneo y haga clic en <strong>Iniciar Escaneo</strong> para construir su biblioteca visual. Reinicie REAPER y haga clic en <strong>Reanudar Escaneo</strong> si ocurre algún bloqueo.</li>
                  <li><strong>Captura manual:</strong> Para cualquier plugin en la lista de bloqueo o sin conexión, abra la ventana del plugin en REAPER, pase el cursor sobre él en VfxM y haga clic en el <strong>Icono de cámara</strong> para capturar la pantalla manualmente.</li>
                  <li><strong>Organizar el desorden:</strong> Haga clic con el botón derecho y elija <strong>Ocultar / Quitar de la lista</strong> para aislar las versiones de prueba o los plugins de utilidad que no necesite.</li>
                  <li><strong>Crear paneles:</strong> Haga clic en el icono de pestaña <strong>+</strong> para crear un nuevo panel (por ejemplo, "Voces"), arrastre sus plugins favoritos y organícelos mediante calificaciones.</li>
                  <li><strong>Insertar y mezclar:</strong> Haga doble clic en cualquier tarjeta o arrástrela directamente a sus pistas para cargarla al instante.</li>
                </ol>
              </div>
            </div>`
        },
        {
          id: "visual-thumbnails",
          title: "2. Sistema de Miniaturas Visuales y Utilidad de Cámara",
          content: `<div>
              <p>Virtue FX Manager está diseñado en torno a un flujo visual. Puede explorar los plugins mediante sus interfaces reales en lugar de líneas de texto genéricas:</p>
              <ul>
                <li><strong>Vista de Cuadrícula vs. Lista:</strong> Alterne entre el diseño de tarjetas gráficas y la vista de lista de hoja de cálculo de metadados utilizando los botones de cambio en la parte superior del navegador.</li>
                <li><strong>Captura de Cámara Integrada:</strong> Abra la interfaz del plugin de destino en REAPER, pase el cursor sobre el plugin en Virtue y haga clic en el <strong>Icono de Cámara</strong> para capturar, recortar y guardar instantáneamente una captura de pantalla personalizada. Los comandos del portapapeles (<kbd>Cmd/Ctrl + C/V</kbd>) y deshacer/rehacer (<kbd>Cmd/Ctrl + Z / Shift+Z</kbd>) son totalmente compatibles.</li>
                <li><strong>Escáner Automático de Miniaturas:</strong> Utilice la utilidad de escaneo por lotes integrada (accesible a través de la ventana dedicada del <strong>Plugin Manager</strong> al lado de Configuración) para construir toda su biblioteca visual automáticamente en minutos. Filtre por desarrollador (como Waves) con sugerencias de autocompletado y regenere miniaturas (para eliminar marcas amarillas de demo) seleccionando el modo de regeneración. Se ejecuta en segundo plano, cargando cada plugin de forma secuencial en una pista temporal, capturando su interfaz gráfica y guardándola en su cuadrícula.</li>
                <li><strong>Prevención de Bloqueos de DAW y Lista de Bloqueio:</strong> Para evitar bucles de bloqueo causados por plugins inestables durante un escaneo, VfxM verifica si las rutas externas están activas, ignora los plugins no listados/ocultos y añade automáticamente a la lista de bloqueo cualquier plugin inestable, omitiéndolos en ejecuciones posteriores. Puede administrar y desbloquear estos plugins directamente en la sección de lista de bloqueo en el <strong>Plugin Manager</strong>.</li>
                <li><strong>Retraso de Captura Configurable:</strong> Los plugins con gráficos pesados o basados en GPU pueden requerir tiempo adicional para renderizarse por completo. Ajuste la configuración de retraso de captura (en fotogramas) en el panel de Configuración para asegurar miniaturas limpias y sin ruido.</li>
                <li><strong>Ilustraciones Predeterminadas:</strong> Se incluye un conjunto de ilustraciones predeterminadas para categorías de plugins comunes para mantener su biblioteca impecable desde el primer día.</li>
              </ul>
              <div style="margin-top: 1.5rem; padding: 1rem; border-radius: var(--radius); border: 1px solid rgba(220, 62, 54, 0.25); background-color: rgba(220, 62, 54, 0.05); color: var(--ink);">
                <strong style="color: #dc3e36; display: block; margin-bottom: 0.5rem;">⚠️ Estabilidad del Host y Recuperación de Bloqueos:</strong>
                El escaneo por lotes carga e instancia cada plugin de su biblioteca. Algunos plugins de terceros (especialmente aquellos con wrappers de compatibilidad o problemas de inicialización de protección de copia) pueden bloquear REAPER. Si ocurre un bloqueo:
                <ol style="margin-top: 0.5rem; margin-bottom: 0; padding-left: 1.25rem;">
                  <li>Simplemente reinicie REAPER. La recuperación de inicio de VfxM agregará automáticamente el plugin bloqueado a la lista de bloqueo.</li>
                  <li>Abra VfxM, haga clic en el botón <strong>Plugin Manager</strong> y haga clic en <strong>Reanudar Escaneo</strong> para continuar desde donde se detuvo. El plugin problemático se omitirá automáticamente.</li>
                  <li><strong>Cómo Desbloquear:</strong> Administre los plugins bloqueados directamente en la sección <strong>Estabilidad y Lista de Bloqueo</strong> en la ventana del <strong>Plugin Manager</strong>. Desbloquee individualmente haciendo clic en el botón <strong>X</strong> o borre toda la lista haciendo clic en <strong>Clear Blocklist</strong>.</li>
                </ol>
                <p style="margin-top: 0.5rem; font-size: 0.9rem;"><em>Nota:</em> Si su biblioteca contiene varios plugins inestables, es posible que deba ejecutar el proceso de escaneo varias veces, reiniciando REAPER después de cada bloqueo, hasta que todos los plugins problemáticos estén en la lista de bloqueo y se procese toda la biblioteca. Además, es posible que deba ejecutar el escaneo varias veces y generar miniaturas varias veces, o capturar manualmente miniaturas específicas, para asegurarse de que todos los plugins se capturen correctamente.</p>
              </div>
              <div style="margin-top: 1rem; padding: 1rem; border-radius: var(--radius); border: 1px solid var(--accent-line); background-color: var(--accent-soft); color: var(--ink);">
                <strong style="color: var(--accent-strong); display: block; margin-bottom: 0.5rem;">💾 Requisitos de Almacenamiento:</strong>
                La generación de miniaturas visuales para bibliotecas grandes requiere espacio en el disco local (cada captura de pantalla recortada ocupa aproximadamente 20KB–80KB). Asegúrese de que la unidad de su sistema tenga suficiente almacenamiento libre antes de escanear toda su biblioteca.
              </div>
            </div>`
        },
        {
          id: "track-insertion",
          title: "3. Inserción en Pistas (Arrastrar & Soltar, Doble Clic)",
          content: `<div>
              <p>Inserte procesadores de audio en sus sesiones sin tener que hacer clics en complejos menús anidados:</p>
              <ul>
                <li><strong>Doble Clic:</strong> Al hacer doble clic sobre cualquier plugin en la cuadrícula o en la lista de texto, este se carga instantáneamente en la pista actualmente activa de REAPER.</li>
                <li><strong>Arrastrar y Soltar (Drag & Drop):</strong> Arrastre la tarjeta del plugin fuera de la ventana de Virtue y suéltela sobre el panel de control de una pista, un canal de mezcla (Mixer) o un espacio vacío en la línea de tiempo (lo que creará una pista nueva de forma automática).</li>
                <li><strong>Carga por Lotes:</strong> Seleccione múltiples plugins usando **Ctrl+Clic** o **Cmd+Clic** (Mac) y arrástrelos o haga doble clic para cargar la cadena completa en la pista de forma secuencial.</li>
              </ul>
            </div>`
        },
        {
          id: "status-circles",
          title: "4. Círculos de Status del Plugin (Listados vs Ocultados)",
          content: `<div>
              <p>Mantenga su lista limpia ocultando plugins de utilidad o duplicados mediante el sistema de firewall:</p>
              <div style="display: flex; gap: 1.5rem; margin: 1rem 0; flex-wrap: wrap">
                <div style="flex: 1 1 200px; padding: 1rem; border-radius: 8px; border: 1px solid var(--line); background-color: rgba(46, 204, 113, 0.08)">
                  <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem">
                    <span style="display: inline-block; width: 10px; height: 10px; border-radius: 50%; background-color: #2ecc71"></span>
                    <strong>Verde (Listado / Activo):</strong>
                  </div>
                  <p style="margin: 0; font-size: 0.9rem">Visible en el buscador. El plugin está activo y listo para ser utilizado en su sesión.</p>
                </div>
                <div style="flex: 1 1 200px; padding: 1rem; border-radius: 8px; border: 1px solid var(--line); background-color: rgba(220, 62, 54, 0.08)">
                  <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem">
                    <span style="display: inline-block; width: 10px; height: 10px; border-radius: 50%; background-color: #dc3e36"></span>
                    <strong>Rojo (Oculto / Unlisted):</strong>
                  </div>
                  <p style="margin: 0; font-size: 0.9rem">Oculto de la navegación principal para evitar saturar el espacio. Haga clic derecho y elija "Forzar Reactivación" para volver a mostrarlo.</p>
                </div>
              </div>
            </div>`
        },
        {
          id: "color-codes",
          title: "5. Colores por Categorías de Audio",
          content: `<div>
              <p>Virtue asocia colores específicos a cada tipo de procesador y formato. Al habilitar la opción "Colorear lista por categoría" en el menú de configuración (icono de engranaje), los nombres de los plugins se mostrarán dinámicamente con sus respectivos colores en la vista de lista:</p>
              <div style="overflow-x: auto">
                <table style="width: 100%; border-collapse: collapse; margin-top: 1rem; font-size: 0.9rem">
                  <thead>
                    <tr style="border-bottom: 2px solid var(--line); text-align: left">
                      <th style="padding: 0.75rem">Color</th>
                      <th style="padding: 0.75rem">Categoría de Audio</th>
                      <th style="padding: 0.75rem">Términos Identificadores</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style="border-bottom: 1px solid var(--line)">
                      <td style="padding: 0.75rem; display: flex; align-items: center; gap: 0.5rem">
                        <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background-color: #33b8ff"></span> Azul
                      </td>
                      <td style="padding: 0.75rem"><strong>Ecualización & Filtros</strong></td>
                      <td style="padding: 0.75rem">EQ, Equalizer, Filter, Ecualizadores Dinámicos</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--line)">
                      <td style="padding: 0.75rem; display: flex; align-items: center; gap: 0.5rem">
                        <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background-color: #ff9433"></span> Naranja
                      </td>
                      <td style="padding: 0.75rem"><strong>Dinámica & Compresores</strong></td>
                      <td style="padding: 0.75rem">Compressor, Limiter, Gate, Expander, Modeladores de Transitorios</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--line)">
                      <td style="padding: 0.75rem; display: flex; align-items: center; gap: 0.5rem">
                        <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background-color: #b27aff"></span> Púrpura
                      </td>
                      <td style="padding: 0.75rem"><strong>Reverberación & Espacio</strong></td>
                      <td style="padding: 0.75rem">Reverb, Space, Room, Plate, Hall, Convolución</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--line)">
                      <td style="padding: 0.75rem; display: flex; align-items: center; gap: 0.5rem">
                        <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background-color: #2edbd1"></span> Cian
                      </td>
                      <td style="padding: 0.75rem"><strong>Delay & Eco</strong></td>
                      <td style="padding: 0.75rem">Delay, Echo, Delay de Cinta</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--line)">
                      <td style="padding: 0.75rem; display: flex; align-items: center; gap: 0.5rem">
                        <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background-color: #56e673"></span> Verde
                      </td>
                      <td style="padding: 0.75rem"><strong>Modulación</strong></td>
                      <td style="padding: 0.75rem">Chorus, Flanger, Phaser, Tremolo, Vibrato</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--line)">
                      <td style="padding: 0.75rem; display: flex; align-items: center; gap: 0.5rem">
                        <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background-color: #ff6cbe"></span> Rosa
                      </td>
                      <td style="padding: 0.75rem"><strong>Instrumentos & Sintetizadores</strong></td>
                      <td style="padding: 0.75rem">Synth, Sampler, VSTi, Sintetizadores Virtuales, Piano, Baterías</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--line)">
                      <td style="padding: 0.75rem; display: flex; align-items: center; gap: 0.5rem">
                        <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background-color: #ff473d"></span> Rojo
                      </td>
                      <td style="padding: 0.75rem"><strong>Distorsión & Saturación</strong></td>
                      <td style="padding: 0.75rem">Distortion, Saturation, Amp, Simuladores, Overdrive, Fuzz</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--line)">
                      <td style="padding: 0.75rem; display: flex; align-items: center; gap: 0.5rem">
                        <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background-color: #b7bcca"></span> Gris
                      </td>
                      <td style="padding: 0.75rem"><strong>Utilidades & Medidores</strong></td>
                      <td style="padding: 0.75rem">Utility, Meter, Analyzer, Osciloscopio, Analizadores de Espectro</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--line)">
                      <td style="padding: 0.75rem; display: flex; align-items: center; gap: 0.5rem">
                        <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background-color: #ffd63d"></span> Amarillo
                      </td>
                      <td style="padding: 0.75rem"><strong>Procesadores MIDI</strong></td>
                      <td style="padding: 0.75rem">MIDI Chorder, Arpegiadores, Ruteadores MIDI</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="color-list-demo-placeholder"></div>
            </div>`
        },
        {
          id: "favorites-organization",
          title: "6. Pestañas de Favoritos y Listas Personalizadas",
          content: `<div>
              <p>Guarde sus cadenas preferidas y configuraciones de instrumentos en grupos dedicados:</p>
              <ul>
                <li><strong>Creación de Pestañas:</strong> Haga clic derecho sobre los encabezados de favoritos para añadir una nueva pestaña. Renómbrelas haciendo doble clic, o arrástrelas horizontalmente para ordenar su posición.</li>
                <li><strong>Agregar a Favoritos:</strong> Seleccione un plugin en el navegador principal y presione "Añadir a Favoritos", o haga clic derecho sobre el plugin para asignarlo a la pestaña en uso.</li>
                <li><strong>Cadenas y Presets de FX:</strong> Guarde sus combinaciones de plugins como FX Chains en REAPER y fījelas en Virtue para cargarlas con un solo clic en proyectos futuros.</li>
                <li><strong>Notas de Plugins:</strong> Escriba notas explicativas o consejos de mezcla para cada plugin directamente en la interfaz. La información se guardará a nivel global en todos sus proyectos.</li>
              </ul>
            </div>`
        },
        {
          id: "keyboard-shortcuts",
          title: "7. Guía Rápida de Atajos de Teclado",
          content: `<div>
              <p>Maneje el Virtue de forma eficiente y rápida directamente desde el teclado de su computadora:</p>
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1rem; margin-top: 1rem">
                <div style="padding: 1rem; border-radius: 8px; border: 1px solid var(--line); background-color: var(--surface)">
                  <code style="color: var(--accent); font-weight: bold">Flechas (Arriba / Abajo)</code>
                  <p style="margin: 0.25rem 0 0 0; font-size: 0.85rem">Permiten navegar por el catálogo en la interfaz del buscador.</p>
                </div>
                <div style="padding: 1rem; border-radius: 8px; border: 1px solid var(--line); background-color: var(--surface)">
                  <code style="color: var(--accent); font-weight: bold">Enter / Intro</code>
                  <p style="margin: 0.25rem 0 0 0; font-size: 0.85rem">Carga el plugin seleccionado en la pista activa de REAPER.</p>
                </div>
                <div style="padding: 1rem; border-radius: 8px; border: 1px solid var(--line); background-color: var(--surface)">
                  <code style="color: var(--accent); font-weight: bold">Esc (Escape)</code>
                  <p style="margin: 0.25rem 0 0 0; font-size: 0.85rem">Cierra los menús desplegables, popups o la ventana principal de la extensión.</p>
                </div>
                <div style="padding: 1rem; border-radius: 8px; border: 1px solid var(--line); background-color: var(--surface)">
                  <code style="color: var(--accent); font-weight: bold">F</code>
                  <p style="margin: 0.25rem 0 0 0; font-size: 0.85rem">Devuelve el foco del teclado al buscador principal de plugins.</p>
                </div>
                <div style="padding: 1rem; border-radius: 8px; border: 1px solid var(--line); background-color: var(--surface)">
                  <code style="color: var(--accent); font-weight: bold">Shift + Clic</code>
                  <p style="margin: 0.25rem 0 0 0; font-size: 0.85rem">Selecciona un conjunto continuo de plugins para cargarlos en cadena.</p>
                </div>
                <div style="padding: 1rem; border-radius: 8px; border: 1px solid var(--line); background-color: var(--surface)">
                  <code style="color: var(--accent); font-weight: bold">Cmd / Ctrl + Clic</code>
                  <p style="margin: 0.25rem 0 0 0; font-size: 0.85rem">Permite seleccionar múltiples plugins discontinuos.</p>
                </div>
              </div>
            </div>`
        }
      ]
    },
    de: {
      title: "Virtue FX Manager Wiki & Dokumentation",
      subtitle: "Erfahren Sie, wie Sie Ihre umfangreiche Plugin-Bibliothek in REAPER visuell organisieren, filtern und blitzschnell laden.",
      langSelectLabel: "Sprache auswählen",
      tableOfContents: "Inhaltsverzeichnis",
      searchPlaceholder: "Hilfe durchsuchen...",
      breadcrumbsHome: "Hilfe",
      categories: {
        setup: "Einrichtung & Konfiguration",
        workflows: "Kern-Workflows",
        organization: "Bibliotheksorganisation",
        shortcuts: "Tastaturkurzbefehle"
      },
      sections: [
        {
          id: "getting-started",
          title: "1. Erste Schritte & Scan-Konfiguration",
          content: `<div>
              <p>Beim ersten Start von Virtue FX Manager in REAPER liest die Anwendung Ihren REAPER-Plugin-Cache aus, um die Liste zu füllen. So halten Sie alles aktuell:</p>
              <ul>
                <li><strong>Automatische Cache-Synchronisierung:</strong> Virtue erkennt neu gescannte Plugins automatisch. Wenn ein Plugin fehlt, führen Sie in REAPER einen Standard-Scan durch (<em>Options &gt; Preferences &gt; Plug-ins &gt; VST &gt; Re-scan</em>).</li>
                <li><strong>Scan-Pfade:</strong> Überprüfen Sie in den Einstellungen (Zahnrad-Symbol), ob Ihre systemspezifischen Plugin-Pfade mit den tatsächlichen Installationsordnern übereinstimmen.</li>
                <li><strong>Spracheinstellungen:</strong> Wählen Sie Ihre bevorzugte Benutzeroberflächen-Sprache. Menüs, Statusanzeigen und Tooltips werden dynamisch übersetzt.</li>
              </ul>
            <div style="margin-top: 1.5rem; padding: 1rem; border-radius: var(--radius); border: 1px solid var(--accent-line); background-color: var(--accent-soft); color: var(--ink);">
                <strong style="color: var(--accent-strong); display: block; margin-bottom: 0.5rem;">🚀 Schnellstart-Arbeitsablauf (Vorgehensweise):</strong>
                <ol style="margin: 0; padding-left: 1.25rem; font-size: 0.95rem; line-height: 1.6;">
                  <li><strong>Ersteinrichtung:</strong> Starten Sie VfxM in REAPER, überprüfen Sie die Sprachauswahl und bestätigen Sie die Plug-in-Pfade in den Einstellungen.</li>
                  <li><strong>Bibliothek scannen:</strong> Gehen Sie zu den Einstellungen (Zahnrad-Symbol), klicken Sie auf <strong>Vorschaubilder generieren</strong>, wählen Sie <strong>Alle fehlenden scannen</strong> und lassen Sie den automatischen Scanner Ihre visuelle Bibliothek aufbauen. Starten Sie REAPER neu und setzen Sie den Scan fort, falls ein Absturz auftritt.</li>
                  <li><strong>Manuelle Erfassung:</strong> Für Plug-ins auf der Sperrliste oder Offline-Plug-ins öffnen Sie das Plug-in-Fenster in REAPER, bewegen Sie den Mauszeiger in VfxM darüber und klicken Sie auf das <strong>Kamera-Symbol</strong>, um die Oberfläche manuell aufzunehmen.</li>
                  <li><strong>Ordnung schaffen:</strong> Klicken Sie mit der rechten Maustaste und wählen Sie <strong>Ausblenden / Von Liste entfernen</strong>, um Testversionen oder nicht benötigte Dienstprogramme zu verstecken.</li>
                  <li><strong>Boards erstellen:</strong> Klicken Sie auf das <strong>+</strong> Tab-Symbol, um ein neues Board zu erstellen (z. B. „Vocals“), ziehen Sie Ihre bevorzugten Plug-ins hinein und sortieren Sie sie nach Bewertungen.</li>
                  <li><strong>Einfügen & Mischen:</strong> Doppelklicken Sie auf eine Karte oder ziehen Sie sie direkt auf Ihre Spuren, um sie sofort zu laden.</li>
                </ol>
              </div>
            </div>`
        },
        {
          id: "visual-thumbnails",
          title: "2. Visuelles Vorschaubild-System & Kamera-Werkzeug",
          content: `<div>
              <p>Virtue FX Manager basiert auf einem visuellen Arbeitsablauf. Sie können Plug-ins anhand ihrer tatsächlichen Benutzeroberflächen anstelle von generischen Textzeilen durchsuchen:</p>
              <ul>
                <li><strong>Rasteransicht vs. Listenansicht:</strong> Schalten Sie mit den Layout-Umschaltknöpfen oben im Browser zwischen dem grafischen Kartenlayout und einer Metadaten-Tabellenansicht um.</li>
                <li><strong>Integrierte Kameraaufnahme:</strong> Öffnen Sie die Benutzeroberfläche des Ziel-Plug-ins in REAPER, bewegen Sie den Mauszeiger über das Plug-in in Virtue und klicken Sie auf das <strong>Kamera-Symbol</strong>, um sofort einen benutzerdefinierten Screenshot aufzunehmen, zuzuschneiden und zu speichern. Zwischenablagebefehle (<kbd>Cmd/Ctrl + C/V</kbd>) und Rückgängigmachen/Wiederholen (<kbd>Cmd/Ctrl + Z / Shift+Z</kbd>) werden vollständig unterstützt.</li>
                <li><strong>Automatischer Vorschaubild-Scanner:</strong> Nutzen Sie das integrierte Batch-Scan-Dienstprogramm (erreichbar über das Zahnrad-Symbol für Einstellungen), um Ihre gesamte visuelle Bibliothek in wenigen Minuten automatisch aufzubauen. Es läuft im Hintergrund, lädt jedes Plug-in nacheinander auf eine temporäre Spur, erfasst dessen grafische Benutzeroberfläche und speichert sie in Ihrem Raster.</li>
                <li><strong>DAW-Absturzschutz & Sperrliste:</strong> Um Absturzschleifen durch instabile Plug-ins während eines Scans zu verhindern, prüft VfxM, ob externe Pfade online sind, ignoriert nicht gelistete/versteckte Plug-ins und setzt abstürzende Plug-ins automatisch in <code class="code-token">vt_scan_blocklist.txt</code> auf eine Sperrliste, sodass sie bei zukünftigen Durchläufen übersprungen werden.</li>
                <li><strong>Einstellbare Aufnahmeverzögerung:</strong> Plug-ins mit anspruchsvoller Grafik oder GPU-Rendering benötigen unter Umständen zusätzliche Zeit, um vollständig geladen zu werden. Passen Sie die Aufnahmeverzögerung (in Frames) in den Einstellungen an, um saubere und fehlerfreie Vorschaubilder zu erhalten.</li>
                <li><strong>Standard-Illustrationen:</strong> Für gängige Plug-in-Kategorien ist eine Reihe von Standard-Illustrationen enthalten, damit Ihre Bibliothek vom ersten Tag an ordentlich aussieht.</li>
              </ul>
              <div style="margin-top: 1.5rem; padding: 1rem; border-radius: var(--radius); border: 1px solid rgba(220, 62, 54, 0.25); background-color: rgba(220, 62, 54, 0.05); color: var(--ink);">
                <strong style="color: #dc3e36; display: block; margin-bottom: 0.5rem;">⚠️ Host-Stabilität & Absturzwiederherstellung:</strong>
                Der Batch-Scan lädt und instanziiert jedes Plug-in in Ihrer Bibliothek. Einige Plug-ins von Drittanbietern (insbesondere solche mit Kompatibilitäts-Wrappern oder Kopierschutz-Initialisierungsproblemen) können REAPER zum Absturz bringen. Wenn ein Absturz auftritt:
                <ol style="margin-top: 0.5rem; margin-bottom: 0; padding-left: 1.25rem;">
                  <li>Starten Sie REAPER einfach neu. Die Startwiederherstellung von VfxM setzt das abgestürzte Plug-in automatisch auf die Sperrliste in <code>vt_scan_blocklist.txt</code>.</li>
                  <li>Öffnen Sie VfxM und starten Sie den Scan erneut. Es wird das abgestürzte Plug-in automatisch überspringen und den Scan der restlichen Bibliothek sicher fortsetzen.</li>
                  <li><strong>Sperrung aufheben:</strong> Wenn Sie die Sperrung eines Plug-ins aufheben möchten, öffnen Sie <code>vt_scan_blocklist.txt</code> (in Ihrem REAPER-Ressourcenverzeichnis) in einem Texteditor, löschen Sie die Zeile des entsprechenden Plug-ins und speichern Sie die Datei.</li>
                </ol>
                <p style="margin-top: 0.5rem; font-size: 0.9rem;"><em>Hinweis:</em> Wenn Ihre Bibliothek mehrere instabile Plug-ins enthält, müssen Sie den Scanvorgang möglicherweise mehrmals ausführen und REAPER nach jedem Absturz neu starten, bis alle problematischen Plug-ins auf der Sperrliste stehen und die gesamte Bibliothek verarbeitet ist. Darüber hinaus müssen Sie den Scan möglicherweise mehrmals ausführen und Vorschaubilder mehrmals generieren oder bestimmte Vorschaubilder manuell erfassen, um sicherzustellen, dass alle Plug-ins erfolgreich erfasst werden.</p>
              </div>
              <div style="margin-top: 1rem; padding: 1rem; border-radius: var(--radius); border: 1px solid var(--accent-line); background-color: var(--accent-soft); color: var(--ink);">
                <strong style="color: var(--accent-strong); display: block; margin-bottom: 0.5rem;">💾 Speicherplatzanforderungen:</strong>
                Das Generieren visueller Vorschaubilder für große Bibliotheken erfordert lokalen Speicherplatz (jeder zugeschnittene Screenshot benötigt ca. 20 KB–80 KB). Stellen Sie sicher, dass Ihre Systemplatte über ausreichend freien Speicherplatz verfügt, bevor Sie Ihre gesamte Bibliothek scannen.
              </div>
            </div>`
        },
        {
          id: "track-insertion",
          title: "3. Plugins in Spuren einfügen (Drag & Drop, Doppelklick)",
          content: `<div>
              <p>Fügen Sie Prozessoren direkt in Ihre Tracks ein, ohne sich durch verschachtelte REAPER-Menüs klicken zu müssen:</p>
              <ul>
                <li><strong>Doppelklick:</strong> Ein Doppelklick auf ein beliebiges Plugin im Browser oder in der Liste lädt es sofort auf die aktuell ausgewählte REAPER-Spur.</li>
                <li><strong>Drag & Drop:</strong> Ziehen Sie eine Plugin-Karte direkt aus dem Virtue-Fenster auf ein Spur-Bedienfeld (TCP), einen Mixer-Kanalzug oder in einen leeren Bereich des Arrangers (wodurch automatisch eine neue Spur erstellt wird).</li>
                <li><strong>Stapel-Einfügen (Batch):</strong> Wählen Sie mehrere Plugins mit **Strg+Klick** bzw. **Cmd+Klick** (Mac) aus und ziehen Sie sie gemeinsam in das Track-Fenster, um die gesamte Signalkette zu laden.</li>
              </ul>
            </div>`
        },
        {
          id: "status-circles",
          title: "4. Status-Punkte (Gelistet vs. Ausgeblendet)",
          content: `<div>
              <p>Halten Sie Ihre Bibliothek sauber, indem Sie Hilfswerkzeuge oder Duplikate ausblenden:</p>
              <div style="display: flex; gap: 1.5rem; margin: 1rem 0; flex-wrap: wrap">
                <div style="flex: 1 1 200px; padding: 1rem; border-radius: 8px; border: 1px solid var(--line); background-color: rgba(46, 204, 113, 0.08)">
                  <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem">
                    <span style="display: inline-block; width: 10px; height: 10px; border-radius: 50%; background-color: #2ecc71"></span>
                    <strong>Grün (Gelistet / Aktiv):</strong>
                  </div>
                  <p style="margin: 0; font-size: 0.9rem">Im Browser sichtbar. Das Plugin ist aktiv und kann in Spuren geladen werden.</p>
                </div>
                <div style="flex: 1 1 200px; padding: 1rem; border-radius: 8px; border: 1px solid var(--line); background-color: rgba(220, 62, 54, 0.08)">
                  <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem">
                    <span style="display: inline-block; width: 10px; height: 10px; border-radius: 50%; background-color: #dc3e36"></span>
                    <strong>Rot (Ausgeblendet / Unlisted):</strong>
                  </div>
                  <p style="margin: 0; font-size: 0.9rem">Für ein cleanes Surfen ausgeblendet. Klicken Sie mit der rechten Maustaste darauf und wählen Sie "Einblenden", um es wiederherzustellen.</p>
                </div>
              </div>
            </div>`
        },
        {
          id: "color-codes",
          title: "5. Sterne-Bewertungen & Farbcodierung nach Kategorien",
          content: `<div>
              <p>Virtue ordnet Audio-Kategorien und Plugin-Formaten Farben zu. Bei Aktivierung der Option "Liste nach Kategorie einfärben" im Einstellungsmenü (Zahnrad-Symbol) werden die Namen in der Listenansicht entsprechend dynamisch dargestellt:</p>
              <div style="overflow-x: auto">
                <table style="width: 100%; border-collapse: collapse; margin-top: 1rem; font-size: 0.9rem">
                  <thead>
                    <tr style="border-bottom: 2px solid var(--line); text-align: left">
                      <th style="padding: 0.75rem">Farbe</th>
                      <th style="padding: 0.75rem">Audio-Kategorie</th>
                      <th style="padding: 0.75rem">Filter-Begriffe</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style="border-bottom: 1px solid var(--line)">
                      <td style="padding: 0.75rem; display: flex; align-items: center; gap: 0.5rem">
                        <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background-color: #33b8ff"></span> Blau
                      </td>
                      <td style="padding: 0.75rem"><strong>EQ & Filter</strong></td>
                      <td style="padding: 0.75rem">EQ, Equalizer, Filter, Dynamische EQs</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--line)">
                      <td style="padding: 0.75rem; display: flex; align-items: center; gap: 0.5rem">
                        <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background-color: #ff9433"></span> Orange
                      </td>
                      <td style="padding: 0.75rem"><strong>Dynamik & Kompressoren</strong></td>
                      <td style="padding: 0.75rem">Compressor, Limiter, Gate, Expander, Transient Shaper</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--line)">
                      <td style="padding: 0.75rem; display: flex; align-items: center; gap: 0.5rem">
                        <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background-color: #b27aff"></span> Lila
                      </td>
                      <td style="padding: 0.75rem"><strong>Hall & Raum (Reverb)</strong></td>
                      <td style="padding: 0.75rem">Reverb, Space, Room, Plate, Hall, Faltungshall</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--line)">
                      <td style="padding: 0.75rem; display: flex; align-items: center; gap: 0.5rem">
                        <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background-color: #2edbd1"></span> Türkis
                      </td>
                      <td style="padding: 0.75rem"><strong>Delay & Echo</strong></td>
                      <td style="padding: 0.75rem">Delay, Echo, Tape Delay</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--line)">
                      <td style="padding: 0.75rem; display: flex; align-items: center; gap: 0.5rem">
                        <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background-color: #56e673"></span> Grün
                      </td>
                      <td style="padding: 0.75rem"><strong>Modulation效果</strong></td>
                      <td style="padding: 0.75rem">Chorus, Flanger, Phaser, Tremolo, Vibrato</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--line)">
                      <td style="padding: 0.75rem; display: flex; align-items: center; gap: 0.5rem">
                        <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background-color: #ff6cbe"></span> Rosa
                      </td>
                      <td style="padding: 0.75rem"><strong>Instrumente & Synthesizer</strong></td>
                      <td style="padding: 0.75rem">Synth, Sampler, VSTi, Klangerzeuger, Piano, Drums</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--line)">
                      <td style="padding: 0.75rem; display: flex; align-items: center; gap: 0.5rem">
                        <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background-color: #ff473d"></span> Rot
                      </td>
                      <td style="padding: 0.75rem"><strong>Zerrsound & Sättigung</strong></td>
                      <td style="padding: 0.75rem">Distortion, Saturation, Amp, Amp-Simulation, Overdrive</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--line)">
                      <td style="padding: 0.75rem; display: flex; align-items: center; gap: 0.5rem">
                        <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background-color: #b7bcca"></span> Grau
                      </td>
                      <td style="padding: 0.75rem"><strong>Werkzeuge & Analyzer</strong></td>
                      <td style="padding: 0.75rem">Utility, Meter, Analyzer, Scope, Pegelmesser</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--line)">
                      <td style="padding: 0.75rem; display: flex; align-items: center; gap: 0.5rem">
                        <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background-color: #ffd63d"></span> Gelb
                      </td>
                      <td style="padding: 0.75rem"><strong>MIDI-Prozessoren</strong></td>
                      <td style="padding: 0.75rem">MIDI Chorder, Arpeggiator, Routing-Tools</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="color-list-demo-placeholder"></div>
            </div>`
        },
        {
          id: "favorites-organization",
          title: "6. Favoriten-Tabs & Eigene Listen",
          content: `<div>
              <p>Organisieren Sie Ihre wichtigsten Tools und Plugin-Ketten in benutzerdefinierten Favoriten-Tabs:</p>
              <ul>
                <li><strong>Tabs verwalten:</strong> Klicken Sie mit der rechten Maustaste auf die Favoriten-Tabs, um einen neuen zu erstellen. Per Doppelklick benennen Sie sie um, und durch horizontales Ziehen verschieben Sie die Tab-Position.</li>
                <li><strong>Favoriten hinzufügen:</strong> Wählen Sie ein Plugin aus und klicken Sie unten auf "Auswahl favorisieren" oder rechtsklicken Sie auf das Plugin-Kästchen, um es dem aktiven Tab hinzuzufügen.</li>
                <li><strong>FX Chains & Presets:</strong> Speichern Sie komplexe Effektketten im REAPER als FX Chain und pinnen Sie diese in Virtue, um sie mit nur einem Klick zu laden.</li>
                <li><strong>Notizen schreiben:</strong> Schreiben Sie Tipps oder Routing-Empfehlungen direkt in das Notizfeld des ausgewählten Plugins. Diese bleiben projektübergreifend gespeichert.</li>
              </ul>
            </div>`
        },
        {
          id: "keyboard-shortcuts",
          title: "7. Tastaturkurzbefehle (Shortcuts)",
          content: `<div>
              <p>Bedienen Sie den Manager für maximale Effizienz vollständig über Ihre Computertastatur:</p>
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1rem; margin-top: 1rem">
                <div style="padding: 1rem; border-radius: 8px; border: 1px solid var(--line); background-color: var(--surface)">
                  <code style="color: var(--accent); font-weight: bold">Pfeiltasten (Hoch / Runter)</code>
                  <p style="margin: 0.25rem 0 0 0; font-size: 0.85rem">Navigiert durch die gelisteten Plugins im Browser.</p>
                </div>
                <div style="padding: 1rem; border-radius: 8px; border: 1px solid var(--line); background-color: var(--surface)">
                  <code style="color: var(--accent); font-weight: bold">Eingabetaste (Enter)</code>
                  <p style="margin: 0.25rem 0 0 0; font-size: 0.85rem">Lädt das markierte Plugin auf die aktive Spur in REAPER.</p>
                </div>
                <div style="padding: 1rem; border-radius: 8px; border: 1px solid var(--line); background-color: var(--surface)">
                  <code style="color: var(--accent); font-weight: bold">Esc (Escape)</code>
                  <p style="margin: 0.25rem 0 0 0; font-size: 0.85rem">Schließt Einstellungen, Popups oder das Hauptfenster der Anwendung.</p>
                </div>
                <div style="padding: 1rem; border-radius: 8px; border: 1px solid var(--line); background-color: var(--surface)">
                  <code style="color: var(--accent); font-weight: bold">F</code>
                  <p style="margin: 0.25rem 0 0 0; font-size: 0.85rem">Setzt den Tastaturfokus zurück auf das Suchfeld bzw. die Browserliste.</p>
                </div>
                <div style="padding: 1rem; border-radius: 8px; border: 1px solid var(--line); background-color: var(--surface)">
                  <code style="color: var(--accent); font-weight: bold">Umschalt + Klick</code>
                  <p style="margin: 0.25rem 0 0 0; font-size: 0.85rem">Wählt einen zusammenhängenden Bereich für das Laden als Kette aus.</p>
                </div>
                <div style="padding: 1rem; border-radius: 8px; border: 1px solid var(--line); background-color: var(--surface)">
                  <code style="color: var(--accent); font-weight: bold">Cmd / Strg + Klick</code>
                  <p style="margin: 0.25rem 0 0 0; font-size: 0.85rem">Wählt einzelne, nicht zusammenhängende Plugins aus.</p>
                </div>
              </div>
            </div>`
        }
      ]
    },
    fr: {
      title: "Wiki & Documentation Virtue FX Manager",
      subtitle: "Apprenez à organiser visuellement, filtrer et charger instantanément votre bibliothèque de plugins dans REAPER.",
      langSelectLabel: "Choisir la langue",
      tableOfContents: "Table des matières",
      searchPlaceholder: "Rechercher dans l'aide...",
      breadcrumbsHome: "Aide",
      categories: {
        setup: "Installation & Configuration",
        workflows: "Flux de travail principaux",
        organization: "Organisation de la bibliothèque",
        shortcuts: "Raccourcis clavier"
      },
      sections: [
        {
          id: "getting-started",
          title: "1. Prise en main et configuration de l'analyse",
          content: `<div>
              <p>Au premier démarrage de Virtue FX Manager dans REAPER, l'application lit le cache de plugins de votre DAW. Pour synchroniser le catalogue :</p>
              <ul>
                <li><strong>Mise à jour automatique :</strong> Virtue détecte automatiquement les nouveaux plugins analysés. S'il en manque un, relancez une analyse dans REAPER (<em>Options &gt; Preferences &gt; Plug-ins &gt; VST &gt; Re-scan</em>).</li>
                <li><strong>Dossiers d'analyse :</strong> Dans les paramètres (icône d'engrenage), configurez vos dossiers système de plugins pour correspondre aux emplacements d'installation réels.</li>
                <li><strong>Langue d'affichage :</strong> Choisissez votre langue préférée. Virtue localise dynamiquement les menus, barres de status et infobulles.</li>
              </ul>
            <div style="margin-top: 1.5rem; padding: 1rem; border-radius: var(--radius); border: 1px solid var(--accent-line); background-color: var(--accent-soft); color: var(--ink);">
                <strong style="color: var(--accent-strong); display: block; margin-bottom: 0.5rem;">🚀 Flux de travail de démarrage rapide (Comment procéder) :</strong>
                <ol style="margin: 0; padding-left: 1.25rem; font-size: 0.95rem; line-height: 1.6;">
                  <li><strong>Configuration initiale :</strong> Lancez VfxM dans REAPER, vérifiez votre sélection de langue et confirmez les chemins des plug-ins dans les Paramètres.</li>
                  <li><strong>Analyser votre bibliothèque :</strong> Allez dans les Paramètres (icône d'engrenage), cliquez sur <strong>Générer les miniatures</strong>, choisissez <strong>Analyser toutes les manquantes</strong> et laissez le scanner automatique créer votre bibliothèque visuelle. Redémarrez REAPER et reprenez l'analyse en cas de plantage.</li>
                  <li><strong>Capture manuelle :</strong> Pour tout plug-in sur liste noire ou hors ligne, ouvrez la fenêtre du plug-in dans REAPER, survolez-le dans VfxM, puis cliquez sur l'<strong>Icône d'appareil photo</strong> pour capturer l'écran manuellement.</li>
                  <li><strong>Organiser le désordre :</strong> Faites un clic droit et choisissez <strong>Masquer / Retirer de la liste</strong> pour isoler les versions d'essai ou les utilitaires dont vous n'avez pas besoin.</li>
                  <li><strong>Créer des panneaux :</strong> Cliquez sur l'icône d'onglet <strong>+</strong> pour créer un nouveau panneau (par ex. « Voix »), faites-y glisser vos plug-ins préférés et organisez-les à l'aide des notes d'évaluation.</li>
                  <li><strong>Insérer et mixer :</strong> Double-cliquez sur une carte ou faites-la glisser directement sur vos pistes pour la charger instantanément.</li>
                </ol>
              </div>
            </div>`
        },
        {
          id: "visual-thumbnails",
          title: "2. Système de Miniatures Visuelles & Outil de Capture",
          content: `<div>
              <p>Virtue FX Manager est conçu autour d'un flux visuel. Vous pouvez parcourir les plug-ins grâce à leurs interfaces graphiques réelles plutôt que de simples lignes de texte :</p>
              <ul>
                <li><strong>Vue en Grille vs. Vue en Liste :</strong> Basculez entre la disposition en cartes graphiques et la vue en liste détaillée de type feuille de calcul à l'aide des boutons de commutation en haut du navigateur.</li>
                <li><strong>Capture d'Écran Intégrée :</strong> Ouvrez l'interface du plug-in ciblé dans REAPER, survolez le plug-in dans Virtue et cliquez sur l'<strong>Icône d'Appareil Photo</strong> pour capturer, recadrer et enregistrer instantanément une capture d'écran personnalisée. Les commandes du presse-papiers (<kbd>Cmd/Ctrl + C/V</kbd>) et annuler/rétablir (<kbd>Cmd/Ctrl + Z / Shift+Z</kbd>) sont entièrement prises en charge.</li>
                <li><strong>Scanner Automatique de Miniatures :</strong> Utilisez l'utilitaire de numérisation par lots intégré (accessible via l'icône Paramètres d'engrenage) pour créer automatiquement toute votre bibliothèque visuelle en quelques minutes. Il s'exécute en arrière-plan, chargeant chaque plug-in séquentiellement sur une piste temporaire, capturant son interface graphique et l'enregistrant dans votre grille.</li>
                <li><strong>Prévention des Plantages de DAW & Liste de Blocage :</strong> Pour éviter les boucles de plantage causées par des plug-ins instables lors d'une numérisation, VfxM vérifie si les chemins d'accès externes sont en ligne, ignore les plug-ins non répertoriés/masqués et place automatiquement sur liste noire les plug-ins instables dans <code class="code-token">vt_scan_blocklist.txt</code>, les ignorant lors des exécutions suivantes.</li>
                <li><strong>Délai de Capture Configurable :</strong> Les plug-ins dotés de graphismes lourds ou basés sur le GPU peuvent nécessiter un délai supplémentaire pour s'afficher correctement. Ajustez le paramètre de délai de capture (en images) dans le panneau Paramètres pour garantir des miniatures nettes et sans bruit.</li>
                <li><strong>Illustrations par Défaut :</strong> Un ensemble d'illustrations par défaut est inclus pour les catégories de plug-ins courantes afin de garder votre bibliothèque impeccable dès le premier jour.</li>
              </ul>
              <div style="margin-top: 1.5rem; padding: 1rem; border-radius: var(--radius); border: 1px solid rgba(220, 62, 54, 0.25); background-color: rgba(220, 62, 54, 0.05); color: var(--ink);">
                <strong style="color: #dc3e36; display: block; margin-bottom: 0.5rem;">⚠️ Stabilité de l'Hôte & Récupération après Plantage :</strong>
                L'analyse par lots charge et instancie chaque plug-in de votre bibliothèque. Certains plug-ins tiers (particulièrement ceux avec des wrappers de compatibilité ou des problèmes d'initialisation de protection contre la copie) peuvent faire planter REAPER. En cas de plantage :
                <ol style="margin-top: 0.5rem; margin-bottom: 0; padding-left: 1.25rem;">
                  <li>Relancez simplement REAPER. La récupération de démarrage de VfxM placera automatiquement le plug-in instable sur liste noire en l'ajoutant à <code>vt_scan_blocklist.txt</code>.</li>
                  <li>Ouvrez VfxM et relancez l'analyse. Le plug-in qui a planté sera automatiquement ignoré et l'analyse du reste de votre bibliothèque reprendra en toute sécurité.</li>
                  <li><strong>Comment Débloquer :</strong> Si vous souhaitez débloquer un plug-in, ouvrez <code>vt_scan_blocklist.txt</code> (situé dans votre dossier de ressources REAPER) dans un éditeur de texte, supprimez la ligne correspondant à votre plug-in et enregistrez le fichier.</li>
                </ol>
                <p style="margin-top: 0.5rem; font-size: 0.9rem;"><em>Remarque :</em> Si votre bibliothèque contient plusieurs plug-ins instables, vous devrez peut-être exécuter le processus d'analyse plusieurs fois, en redémarrant REAPER après chaque plantage, jusqu'à ce que tous les plug-ins problématiques soient sur liste noire et que l'intégralité de la bibliothèque soit traitée. De plus, vous devrez peut-être lancer l'analyse plusieurs fois et générer les miniatures plusieurs fois, ou capturer manuellement certaines miniatures, pour vous assurer que tous les plug-ins sont capturés avec succès.</p>
              </div>
              <div style="margin-top: 1rem; padding: 1rem; border-radius: var(--radius); border: 1px solid var(--accent-line); background-color: var(--accent-soft); color: var(--ink);">
                <strong style="color: var(--accent-strong); display: block; margin-bottom: 0.5rem;">💾 Exigences de Stockage :</strong>
                La génération de miniatures visuelles pour les grandes bibliothèques nécessite de l'espace disque local (chaque capture d'écran recadrée prend environ 20 Ko à 80 Ko). Assurez-vous que votre disque système dispose d'un espace de stockage libre suffisant avant d'analyser l'ensemble de votre bibliothèque.
              </div>
            </div>`
        },
        {
          id: "track-insertion",
          title: "3. Insertion de plugins (Glisser-Déposer et Double-Clic)",
          content: `<div>
              <p>Chargez des effets dans vos sessions de mixage sans passer par de longs menus contextuels :</p>
              <ul>
                <li><strong>Double-Clic :</strong> Double-cliquez sur n'importe quel plugin dans le navigateur ou la liste pour l'insérer sur la piste active sélectionnée dans REAPER.</li>
                <li><strong>Glisser-Déposer (Drag & Drop) :</strong> Glissez la carte du plugin depuis la fenêtre de Virtue et déposez-la sur le panneau de contrôle de piste, la console de mixage (Mixer) ou un espace vide de l'arrangeur (ce qui créera automatiquement une nouvelle piste).</li>
                <li><strong>Insertion en lot :</strong> Sélectionnez plusieurs plugins avec **Ctrl+Clic** ou **Cmd+Clic** (Mac), puis glissez ou double-cliquez pour charger la chaîne d'effets complète de manière séquentielle.</li>
              </ul>
            </div>`
        },
        {
          id: "status-circles",
          title: "4. Cercles de status du plugin (Affiché vs Masqué)",
          content: `<div>
              <p>Masquez les utilitaires ou les doublons inutiles grâce au système de pare-feu :</p>
              <div style="display: flex; gap: 1.5rem; margin: 1rem 0; flex-wrap: wrap">
                <div style="flex: 1 1 200px; padding: 1rem; border-radius: 8px; border: 1px solid var(--line); background-color: rgba(46, 204, 113, 0.08)">
                  <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem">
                    <span style="display: inline-block; width: 10px; height: 10px; border-radius: 50%; background-color: #2ecc71"></span>
                    <strong>Vert (Affiché / Actif) :</strong>
                  </div>
                  <p style="margin: 0; font-size: 0.9rem">Visible dans les recherches. Le plugin est actif et disponible pour chargement.</p>
                </div>
                <div style="flex: 1 1 200px; padding: 1rem; border-radius: 8px; border: 1px solid var(--line); background-color: rgba(220, 62, 54, 0.08)">
                  <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem">
                    <span style="display: inline-block; width: 10px; height: 10px; border-radius: 50%; background-color: #dc3e36"></span>
                    <strong>Rouge (Masqué / Unlisted) :</strong>
                  </div>
                  <p style="margin: 0; font-size: 0.9rem">Masqué de la navigation active. Faites un clic droit et sélectionnez "Forcer la réactivation" pour le restaurer.</p>
                </div>
              </div>
            </div>`
        },
        {
          id: "color-codes",
          title: "5. Codes couleur par catégorie audio",
          content: `<div>
              <p>Virtue attribue des couleurs aux types de processeurs et formats. L'activation de l'option "Colorer la liste par catégorie" dans le menu des paramètres (icône d'engrenage) permet de colorer dynamiquement les lignes dans la vue en liste :</p>
              <div style="overflow-x: auto">
                <table style="width: 100%; border-collapse: collapse; margin-top: 1rem; font-size: 0.9rem">
                  <thead>
                    <tr style="border-bottom: 2px solid var(--line); text-align: left">
                      <th style="padding: 0.75rem">Couleur</th>
                      <th style="padding: 0.75rem">Catégorie Audio</th>
                      <th style="padding: 0.75rem">Termes Identifiants</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style="border-bottom: 1px solid var(--line)">
                      <td style="padding: 0.75rem; display: flex; align-items: center; gap: 0.5rem">
                        <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background-color: #33b8ff"></span> Bleu
                      </td>
                      <td style="padding: 0.75rem"><strong>Égalisation & Filtres</strong></td>
                      <td style="padding: 0.75rem">EQ, Equalizer, Filter, Égaliseurs dynamiques</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--line)">
                      <td style="padding: 0.75rem; display: flex; align-items: center; gap: 0.5rem">
                        <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background-color: #ff9433"></span> Orange
                      </td>
                      <td style="padding: 0.75rem"><strong>Dynamique & Compresseurs</strong></td>
                      <td style="padding: 0.75rem">Compressor, Limiter, Noise Gate, Expander, Transient Shaper</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--line)">
                      <td style="padding: 0.75rem; display: flex; align-items: center; gap: 0.5rem">
                        <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background-color: #b27aff"></span> Violet
                      </td>
                      <td style="padding: 0.75rem"><strong>Réverbération & Espace</strong></td>
                      <td style="padding: 0.75rem">Reverb, Space, Room, Plate, Hall, Réverbération à convolution</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--line)">
                      <td style="padding: 0.75rem; display: flex; align-items: center; gap: 0.5rem">
                        <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background-color: #2edbd1"></span> Cyan
                      </td>
                      <td style="padding: 0.75rem"><strong>Délai & Écho</strong></td>
                      <td style="padding: 0.75rem">Delay, Echo, Tape Delay</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--line)">
                      <td style="padding: 0.75rem; display: flex; align-items: center; gap: 0.5rem">
                        <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background-color: #56e673"></span> Vert
                      </td>
                      <td style="padding: 0.75rem"><strong>Modulations</strong></td>
                      <td style="padding: 0.75rem">Chorus, Flanger, Phaser, Tremolo, Vibrato</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--line)">
                      <td style="padding: 0.75rem; display: flex; align-items: center; gap: 0.5rem">
                        <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background-color: #ff6cbe"></span> Rose
                      </td>
                      <td style="padding: 0.75rem"><strong>Instruments & Synthétiseurs</strong></td>
                      <td style="padding: 0.75rem">Synth, Sampler, VSTi, Synthétiseurs virtuels, Piano, Batterie</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--line)">
                      <td style="padding: 0.75rem; display: flex; align-items: center; gap: 0.5rem">
                        <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background-color: #ff473d"></span> Rouge
                      </td>
                      <td style="padding: 0.75rem"><strong>Distorsion & Saturation</strong></td>
                      <td style="padding: 0.75rem">Distortion, Saturation, Amp, Simulateur d'ampli, Overdrive, Fuzz</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--line)">
                      <td style="padding: 0.75rem; display: flex; align-items: center; gap: 0.5rem">
                        <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background-color: #b7bcca"></span> Gris
                      </td>
                      <td style="padding: 0.75rem"><strong>Utilitaires & Analyseurs</strong></td>
                      <td style="padding: 0.75rem">Utility, Meter, Analyzer, Oscilloscope, Analyseurs de spectre</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--line)">
                      <td style="padding: 0.75rem; display: flex; align-items: center; gap: 0.5rem">
                        <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background-color: #ffd63d"></span> Jaune
                      </td>
                      <td style="padding: 0.75rem"><strong>Processeurs MIDI</strong></td>
                      <td style="padding: 0.75rem">MIDI Chorder, Arpégiateurs, Routeurs MIDI</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="color-list-demo-placeholder"></div>
            </div>`
        },
        {
          id: "favorites-organization",
          title: "6. Onglets de favoris et listes personnalisées",
          content: `<div>
              <p>Organisez vos plugins préférés et chaînes de traitement dans des onglets dédiés :</p>
              <ul>
                <li><strong>Gérer les onglets :</strong> Faites un clic droit sur les onglets de favoris pour en créer un nouveau. Renommez-les par double-clic, ou glissez les onglets horizontalement pour changer leur ordre.</li>
                <li><strong>Ajouter aux favoris :</strong> Sélectionnez un plugin dans le catalogue général et cliquez sur "Favoriser la sélection", ou faites un clic droit sur le plugin pour l'assigner à l'onglet actif.</li>
                <li><strong>Presets & Chaînes d'effets :</strong> Enregistrez vos configurations de pistes comme FX Chains dans REAPER et fixez-les dans Virtue pour les charger en un clic.</li>
                <li><strong>Notes personnalisées :</strong> Rédigez des conseils d'utilisation ou des raccourcis de routage dans le panneau de notes de chaque plugin. Les notes sont conservées globalement.</li>
              </ul>
            </div>`
        },
        {
          id: "keyboard-shortcuts",
          title: "7. Raccourcis clavier essentiels",
          content: `<div>
              <p>Contrôlez Virtue de manière rapide et efficace entièrement depuis votre clavier d'ordinateur :</p>
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1rem; margin-top: 1rem">
                <div style="padding: 1rem; border-radius: 8px; border: 1px solid var(--line); background-color: var(--surface)">
                  <code style="color: var(--accent); font-weight: bold">Touches Fléchées (Haut / Bas)</code>
                  <p style="margin: 0.25rem 0 0 0; font-size: 0.85rem">Parcourez la liste des plugins affichés dans le navigateur.</p>
                </div>
                <div style="padding: 1rem; border-radius: 8px; border: 1px solid var(--line); background-color: var(--surface)">
                  <code style="color: var(--accent); font-weight: bold">Touche Entrée (Enter)</code>
                  <p style="margin: 0.25rem 0 0 0; font-size: 0.85rem">Insère immédiatement le plugin sélectionné sur la piste active.</p>
                </div>
                <div style="padding: 1rem; border-radius: 8px; border: 1px solid var(--line); background-color: var(--surface)">
                  <code style="color: var(--accent); font-weight: bold">Touche Échap (Escape)</code>
                  <p style="margin: 0.25rem 0 0 0; font-size: 0.85rem">Ferme les paramètres, les popups ou la fenêtre principale du plugin.</p>
                </div>
                <div style="padding: 1rem; border-radius: 8px; border: 1px solid var(--line); background-color: var(--surface)">
                  <code style="color: var(--accent); font-weight: bold">Touche F</code>
                  <p style="margin: 0.25rem 0 0 0; font-size: 0.85rem">Redonne le focus du clavier à la liste de recherche du navigateur.</p>
                </div>
                <div style="padding: 1rem; border-radius: 8px; border: 1px solid var(--line); background-color: var(--surface)">
                  <code style="color: var(--accent); font-weight: bold">Shift + Clic</code>
                  <p style="margin: 0.25rem 0 0 0; font-size: 0.85rem">Sélectionne une plage de plugins adjacents pour les charger à la suite.</p>
                </div>
                <div style="padding: 1rem; border-radius: 8px; border: 1px solid var(--line); background-color: var(--surface)">
                  <code style="color: var(--accent); font-weight: bold">Cmd / Ctrl + Clic</code>
                  <p style="margin: 0.25rem 0 0 0; font-size: 0.85rem">Sélectionne plusieurs plugins non contigus.</p>
                </div>
              </div>
            </div>`
        }
      ]
    },
    hi: {
      title: "Virtue FX Manager विकी और दस्तावेज़",
      subtitle: "REAPER के अंदर अपनी विशाल प्लगइन लाइब्रेरी को आसानी से व्यवस्थित करना, खोजना और तुरंत लोड करना सीखें।",
      langSelectLabel: "भाषा चुनें",
      tableOfContents: "विषय सूची",
      searchPlaceholder: "मदद खोजें...",
      breadcrumbsHome: "मदद",
      categories: {
        setup: "सेटअप और कॉन्फ़िगरेशन",
        workflows: "मुख्य वर्कफ़्लो",
        organization: "लाइब्रेरी संगठन",
        shortcuts: "कीबोर्ड शॉर्टकट्स"
      },
      sections: [
        {
          id: "getting-started",
          title: "1. शुरुआत और स्कैन सेटअप",
          content: `<div>
              <p>जब आप पहली बार REAPER में Virtue FX Manager खोलते हैं, तो यह आपकी प्लगइन सूची बनाने के लिए REAPER के कैश को पढ़ता है। सब कुछ सिंक रखने के लिए:</p>
              <ul>
                <li><strong>ऑटो कैश सिंक:</strong> Virtue नए स्कैन किए गए प्लगइन्स का स्वचालित रूप से पता लगाता है। यदि कोई प्लगइन गायब है, तो REAPER में मानक स्कैन चलाएं (<em>Options &gt; Preferences &gt; Plug-ins &gt; VST &gt; Re-scan</em>)।</li>
                <li><strong>स्कैन निर्देशिकाएं:</strong> सेटिंग्स पैनल (गियर आइकन) में, सुनिश्चित करें कि आपके सिस्टम के प्लगइन फ़ोल्डर पथ आपके वास्तविक प्लगइन स्थापना स्थानों से मेल खाते हैं।</li>
                <li><strong>भाषा सेटिंग्स:</strong> अपनी पसंदीदा इंटरफ़ेस भाषा चुनें। ऐप स्वचालित रूप से मेनू, स्टेटस बार और त्वरित सुझावों को स्थानीयकृत करेगा।</li>
              </ul>
            <div style="margin-top: 1.5rem; padding: 1rem; border-radius: var(--radius); border: 1px solid var(--accent-line); background-color: var(--accent-soft); color: var(--ink);">
                <strong style="color: var(--accent-strong); display: block; margin-bottom: 0.5rem;">🚀 त्वरित प्रारंभ कार्यप्रवाह (कैसे आगे बढ़ें):</strong>
                <ol style="margin: 0; padding-left: 1.25rem; font-size: 0.95rem; line-height: 1.6;">
                  <li><strong>प्रारंभिक सेटअप:</strong> REAPER में VfxM लॉन्च करें, अपनी भाषा के चयन को सत्यापित करें, और सेटिंग्स में प्लगइन पथों की पुष्टि करें।</li>
                  <li><strong>अपनी लाइब्रेरी को स्कैन करें:</strong> सेटिंग्स (गियर आइकन) पर जाएं, <strong>थंबनेल जेनरेट करें</strong> पर क्लिक करें, <strong>सभी लापता स्कैन करें</strong> चुनें, और ऑटो स्कैनर को अपनी विज़ुअल लाइब्रेरी बनाने दें। यदि कोई क्रैश होता है तो REAPER को पुनरारंभ करें और स्कैन फिर से शुरू करें।</li>
                  <li><strong>मैन्युअल कैप्चर:</strong> किसी भी ब्लॉकलिस्टेड या ऑफ़लाइन प्लगइन्स के लिए, REAPER में प्लगइन विंडो को तैरते हुए खोलें, VfxM में उस पर कर्सर ले जाएं, और स्क्रीन को मैन्युअल रूप से कैप्चर करने के लिए <strong>कैमरा आइकन</strong> पर क्लिक करें।</li>
                  <li><strong>अव्यवस्था व्यवस्थित करें:</strong> राइट-क्लिक करें और परीक्षण संस्करणों या उन उपयोगिता प्लगइन्स को छिपाने के लिए <strong>छिपाएं / सूची से हटाएं</strong> चुनें जिनकी आपको आवश्यकता नहीं है।</li>
                  <li><strong>बोर्ड बनाएं:</strong> एक नया बोर्ड (जैसे "वोकल्स") बनाने के लिए <strong>+</strong> टैब आइकन पर क्लिक करें, अपने पसंदीदा प्लगइन्स को खींचकर लाएं, और रेटिंग का उपयोग करके उन्हें क्रमबद्ध करें।</li>
                  <li><strong>सम्मिलित करें और मिक्स करें:</strong> तुरंत लोड करने के लिए किसी भी कार्ड पर डबल-क्लिक करें या उसे सीधे अपने ट्रैक पर खींचें।</li>
                </ol>
              </div>
            </div>`
        },
        {
          id: "visual-thumbnails",
          title: "2. विज़ुअल थंबनेल प्रणाली और कैमरा उपयोगिता",
          content: `<div>
              <p>वर्चू एफ़एक्स मैनेजर (Virtue FX Manager) को एक विज़ुअल फ्लो के आसपास बनाया गया है। आप प्लगइन्स को सामान्य टेक्स्ट लाइनों के बजाय उनके वास्तविक यूजर इंटरफेस के माध्यम से ब्राउज़ कर सकते हैं।</p>
              <ul>
                <li><strong>ग्रिड व्यू बनाम लिस्ट व्यू:</strong> ब्राउज़र के शीर्ष पर स्थित लेआउट स्विचर बटन का उपयोग करके ग्राफिकल कार्ड लेआउट और मेटाडेटा स्प्रेडशीट सूची दृश्य के बीच स्विच करें।</li>
                <li><strong>अंतर्निहित कैमरा कैप्चर:</strong> REAPER में लक्ष्य प्लगइन इंटरफ़ेस खोलें, Virtue में प्लगइन पर कर्सर ले जाएं, और एक कस्टम स्क्रीनशॉट को तुरंत कैप्चर, क्रॉप और स्टोर करने के लिए <strong>कैमरा आइकन</strong> पर क्लिक करें। क्लिपबोर्ड कमांड (<kbd>Cmd/Ctrl + C/V</kbd>) और पूर्ववत/पुनः करें (<kbd>Cmd/Ctrl + Z / Shift+Z</kbd>) पूरी तरह से समर्थित हैं।</li>
                <li><strong>ऑटो थंबनेल स्कैनर:</strong> कुछ ही मिनटों में अपनी संपूर्ण विज़ुअल लाइब्रेरी को स्वचालित रूप से बनाने के लिए अंतर्निहित बैच स्कैन उपयोगिता (गियर सेटिंग्स आइकन के माध्यम से सुलभ) का उपयोग करें। यह पृष्ठभूमि में चलता है, प्रत्येक प्लगइन को क्रमिक रूप से एक अस्थायी ट्रैक पर लोड करता है, उसके ग्राफिकल इंटरफ़ेस को कैप्चर करता है, और इसे आपके ग्रिड में सहेजता है।</li>
                <li><strong>DAW क्रैश रोकथाम और ब्लॉकलिस्ट:</strong> स्कैन के दौरान अस्थिर प्लगइन्स से क्रैश लूप को रोकने के लिए, VfxM जांच करता है कि बाहरी पथ ऑनलाइन हैं या नहीं, गैर-सूचीबद्ध/छिपे हुए प्लगइन्स को अनदेखा करता है, और स्वचालित रूप से <code class="code-token">vt_scan_blocklist.txt</code> में किसी भी क्रैश होने वाले प्लगइन को ब्लॉकलिस्ट करता है, जिससे बाद के रनों में उन्हें छोड़ दिया जाता है।</li>
                <li><strong>कॉन्फ़िगर करने योग्य कैप्चर विलंब:</strong> भारी ग्राफिक्स या GPU-आधारित प्लगइन्स को पूरी तरह से प्रस्तुत करने के लिए अतिरिक्त समय की आवश्यकता हो सकती है। साफ, शोर-मुक्त थंबनेल सुनिश्चित करने के लिए सेटिंग्स पैनल में कैप्चर विलंब सेटिंग (फ्रेम में) को समायोजित करें।</li>
                <li><strong>डिफ़ॉल्ट चित्र:</strong> आपकी लाइब्रेरी को पहले दिन से ही प्राचीन बनाए रखने के लिए सामान्य प्लगइन श्रेणियों के लिए डिफ़ॉल्ट चित्रों का एक सेट शामिल किया गया है।</li>
              </ul>
              <div style="margin-top: 1.5rem; padding: 1rem; border-radius: var(--radius); border: 1px solid rgba(220, 62, 54, 0.25); background-color: rgba(220, 62, 54, 0.05); color: var(--ink);">
                <strong style="color: #dc3e36; display: block; margin-bottom: 0.5rem;">⚠️ होस्ट स्थिरता और क्रैश रिकवरी:</strong>
                बैच स्कैनिंग आपकी लाइब्रेरी में प्रत्येक प्लगइन को लोड और इंस्टेंट करता है। कुछ तृतीय-पक्ष प्लगइन्स (विशेष रूप से वे जो संगतता रैपर या कॉपी-प्रोटेक्शन इनिशियलाइज़ेशन समस्याओं के साथ आते हैं) REAPER को क्रैश कर सकते हैं। यदि क्रैश होता है:
                <ol style="margin-top: 0.5rem; margin-bottom: 0; padding-left: 1.25rem;">
                  <li>बस REAPER को पुनरारंभ करें। VfxM की स्टार्टअप रिकवरी क्रैश हुए प्लगइन को <code>vt_scan_blocklist.txt</code> में जोड़कर स्वचालित रूप से ब्लॉकलिस्ट कर देगी।</li>
                  <li>VfxM खोलें और स्कैन को पुनरारंभ करें। यह स्वचालित रूप से क्रैश हुए प्लगइन को छोड़ देगा और आपकी शेष लाइब्रेरी को सुरक्षित रूप से स्कैन करना जारी रखेगा।</li>
                  <li><strong>अनब्लॉक कैसे करें:</strong> यदि आप किसी प्लगइन को अनब्लॉक करना चाहते हैं, तो टेक्स्ट एडिटर में <code>vt_scan_blocklist.txt</code> (अपने REAPER रिसोर्स डायरेक्टरी में स्थित) खोलें, अपने प्लगइन से संबंधित लाइन को डिलीट करें और फ़ाइल को सेव करें।</li>
                </ol>
                <p style="margin-top: 0.5rem; font-size: 0.9rem;"><em>नोट:</em> यदि आपकी लाइब्रेरी में कई अस्थिर प्लगइन्स हैं, तो आपको स्कैन प्रक्रिया को कई बार चलाना पड़ सकता है, प्रत्येक क्रैश के बाद REAPER को पुनरारंभ करना होगा, जब तक कि सभी समस्याग्रस्त प्लगइन्स ब्लॉकलिस्ट न हो जाएं और पूरी लाइब्रेरी संसाधित न हो जाए। इसके अतिरिक्त, सभी प्लगइन्स को सफलतापूर्वक कैप्चर करने के लिए आपको स्कैन को कई बार चलाने और कई बार थंबनेल जेनरेट करने, या कुछ थंबनेल को मैन्युअल रूप से कैप्चर करने की आवश्यकता हो सकती है।</p>
              </div>
              <div style="margin-top: 1rem; padding: 1rem; border-radius: var(--radius); border: 1px solid var(--accent-line); background-color: var(--accent-soft); color: var(--ink);">
                <strong style="color: var(--accent-strong); display: block; margin-bottom: 0.5rem;">💾 भंडारण आवश्यकताएँ:</strong>
                बड़ी लाइब्रेरियों के लिए विज़ुअल थंबनेल बनाने के लिए स्थानीय डिस्क स्थान की आवश्यकता होती है (प्रत्येक क्रॉप किए गए स्क्रीनशॉट में लगभग 20KB–80KB स्थान लगता है)। अपनी पूरी लाइब्रेरी को स्कैन करने से पहले सुनिश्चित करें कि आपके सिस्टम ड्राइव पर पर्याप्त खाली स्टोरेज है।
              </div>
            </div>`
        },
        {
          id: "track-insertion",
          title: "3. ट्रैक पर डालना (ड्रैग-एंड-ड्रॉप और डबल-क्लिक)",
          content: `<div>
              <p>जटिल राइट-क्लिक मेनू के बिना एक क्लिक में प्लगइन्स को अपने ट्रैक पर लोड करें:</p>
              <ul>
                <li><strong>डबल-क्लिक:</strong> ग्रिड या सूची व्यू में किसी भी प्लगइन पर डबल-क्लिक करने से वह तुरंत REAPER के चयनित ट्रैक पर लोड हो जाता है।</li>
                <li><strong>ड्रैग एंड ड्रॉप:</strong> प्लगइन कार्ड को सीधे Virtue विंडो से खींचें और ट्रैक कंट्रोल पैनल, मिक्सर चैनल या टाइमलाइन के खाली स्थान पर छोड़ें (खाली स्थान पर छोड़ने से नया ट्रैक बन जाएगा)।</li>
                <li><strong>बैच लोड:</strong> **Ctrl+क्लिक** या **Cmd+क्लिक** (Mac) का उपयोग करके कई प्लगइन्स चुनें, फिर उन्हें एक साथ ट्रैक पर लोड करने के लिए खींचें या डबल-क्लिक करें।</li>
              </ul>
            </div>`
        },
        {
          id: "status-circles",
          title: "4. प्लगइन स्टेटस सर्कल (Listed बनाम Unlisted)",
          content: `<div>
              <p>फ़ायरवॉल सिस्टम का उपयोग करके उन प्लगइन्स को छिपाएं जिनकी आपको आवश्यकता नहीं है:</p>
              <div style="display: flex; gap: 1.5rem; margin: 1rem 0; flex-wrap: wrap">
                <div style="flex: 1 1 200px; padding: 1rem; border-radius: 8px; border: 1px solid var(--line); background-color: rgba(46, 204, 113, 0.08)">
                  <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem">
                    <span style="display: inline-block; width: 10px; height: 10px; border-radius: 50%; background-color: #2ecc71"></span>
                    <strong>हरा (Listed / सक्रिय):</strong>
                  </div>
                  <p style="margin: 0; font-size: 0.9rem">ब्राउज़र सूची में दिखाई देता है। इसका मतलब है कि प्लगइन सक्रिय है और लोड करने के लिए उपलब्ध है।</p>
                </div>
                <div style="flex: 1 1 200px; padding: 1rem; border-radius: 8px; border: 1px solid var(--line); background-color: rgba(220, 62, 54, 0.08)">
                  <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem">
                    <span style="display: inline-block; width: 10px; height: 10px; border-radius: 50%; background-color: #dc3e36"></span>
                    <strong>लाल (छिपा हुआ / Unlisted):</strong>
                  </div>
                  <p style="margin: 0; font-size: 0.9rem">मुख्य ब्राउज़िंग से छिपा हुआ। इसे वापस दिखाने के लिए राइट-क्लिक करें और "Force Reactivate" चुनें।</p>
                </div>
              </div>
            </div>`
        },
        {
          id: "color-codes",
          title: "5. रेटिंग और श्रेणियाँ रंग कोड",
          content: `<div>
              <p>Virtue ऑडियो श्रेणियों के आधार पर रंग असाइन करता है। सेटिंग्स मेनू (गियर आइकन) में "कैटेगरी के अनुसार रंगीन सूची" विकल्प को सक्षम करने से प्लगइन सूची दृश्य में नाम गतिशील रूप से रंगीन दिखाई देंगे:</p>
              <div style="overflow-x: auto">
                <table style="width: 100%; border-collapse: collapse; margin-top: 1rem; font-size: 0.9rem">
                  <thead>
                    <tr style="border-bottom: 2px solid var(--line); text-align: left">
                      <th style="padding: 0.75rem">रंग</th>
                      <th style="padding: 0.75rem">श्रेणी</th>
                      <th style="padding: 0.75rem">उदाहरण / नाम</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style="border-bottom: 1px solid var(--line)">
                      <td style="padding: 0.75rem; display: flex; align-items: center; gap: 0.5rem">
                        <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background-color: #33b8ff"></span> नीला
                      </td>
                      <td style="padding: 0.75rem"><strong>EQ & फ़िल्टर</strong></td>
                      <td style="padding: 0.75rem">EQ, Equalizer, Filter, डायनेमिक EQ</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--line)">
                      <td style="padding: 0.75rem; display: flex; align-items: center; gap: 0.5rem">
                        <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background-color: #ff9433"></span> नारंगी
                      </td>
                      <td style="padding: 0.75rem"><strong>डायनेमिक्स & कंप्रेसर</strong></td>
                      <td style="padding: 0.75rem">Compressor, Limiter, Noise Gate, एक्सपैंडर</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--line)">
                      <td style="padding: 0.75rem; display: flex; align-items: center; gap: 0.5rem">
                        <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background-color: #b27aff"></span> बैंगनी
                      </td>
                      <td style="padding: 0.75rem"><strong>रिवर्ब & स्पेस</strong></td>
                      <td style="padding: 0.75rem">Reverb, Space, Room, प्लेट रिवर्ब, हॉल रिवर्ब</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--line)">
                      <td style="padding: 0.75rem; display: flex; align-items: center; gap: 0.5rem">
                        <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background-color: #2edbd1"></span> फ़िरोज़ा
                      </td>
                      <td style="padding: 0.75rem"><strong>डिले & इको</strong></td>
                      <td style="padding: 0.75rem">Delay, Echo, टेप डिले</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--line)">
                      <td style="padding: 0.75rem; display: flex; align-items: center; gap: 0.5rem">
                        <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background-color: #56e673"></span> हरा
                      </td>
                      <td style="padding: 0.75rem"><strong>मॉड्यूलेशन</strong></td>
                      <td style="padding: 0.75rem">Chorus, Flanger, Phaser, ट्रेमोलो, कोरस</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--line)">
                      <td style="padding: 0.75rem; display: flex; align-items: center; gap: 0.5rem">
                        <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background-color: #ff6cbe"></span> गुलाबी
                      </td>
                      <td style="padding: 0.75rem"><strong>इंस्ट्रूमेंट्स & सिंथेसाइज़र</strong></td>
                      <td style="padding: 0.75rem">Synth, Sampler, VSTi, वर्चुअल सिंथ, ड्रम, पियानो</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--line)">
                      <td style="padding: 0.75rem; display: flex; align-items: center; gap: 0.5rem">
                        <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background-color: #ff473d"></span> लाल
                      </td>
                      <td style="padding: 0.75rem"><strong>डिस्टॉर्शन & सैचुरेशन</strong></td>
                      <td style="padding: 0.75rem">Distortion, Saturation, Amp, एम्प सिम्युलेटर, ओवरड्राइव</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--line)">
                      <td style="padding: 0.75rem; display: flex; align-items: center; gap: 0.5rem">
                        <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background-color: #b7bcca"></span> ग्रे
                      </td>
                      <td style="padding: 0.75rem"><strong>यूटिलिटी & मीटर</strong></td>
                      <td style="padding: 0.75rem">Utility, Meter, Analyzer, स्पेक्ट्रम विश्लेषक</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--line)">
                      <td style="padding: 0.75rem; display: flex; align-items: center; gap: 0.5rem">
                        <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background-color: #ffd63d"></span> पीला
                      </td>
                      <td style="padding: 0.75rem"><strong>MIDI प्रोसेसर</strong></td>
                      <td style="padding: 0.75rem">MIDI Chorder, आर्पेगेटर, MIDI रूटिंग टूल्स</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="color-list-demo-placeholder"></div>
            </div>`
        },
        {
          id: "favorites-organization",
          title: "6. पसंदीदा टैब और कस्टम सूचियाँ",
          content: `<div>
              <p>अपने मुख्य टूल्स और प्लगइन चेन को कस्टम पसंदीदा टैब में व्यवस्थित करें:</p>
              <ul>
                <li><strong>टैब प्रबंधित करना:</strong> नया टैब बनाने के लिए पसंदीदा टैब हेडर पर राइट-क्लिक करें। नाम बदलने के लिए डबल-क्लिक करें, या उनकी स्थिति बदलने के लिए टैब को खींचें।</li>
                <li><strong>पसंदीदा जोड़ें:</strong> ब्राउज़र में किसी भी प्लगइन को चुनें और "पसंदीदा जोड़ें" बटन पर क्लिक करें, या प्लगइन नाम पर राइट-क्लिक करके सक्रिय टैब में जोड़ें।</li>
                <li><strong>FX चेन्स & प्रीसेट:</strong> REAPER में अपनी इफेक्ट्स चेन्स को FX Chain के रूप में सहेजें और एक क्लिक में लोड करने के लिए उन्हें Virtue टैब में पिन करें।</li>
                <li><strong>कस्टम नोट्स:</strong> प्लगइन चुनकर नोट्स पैनल में सीधे सुझाव या टिप्स टाइप करें। ये नोट्स आपके सभी प्रोजेक्ट्स में सहेजे रहेंगे।</li>
              </ul>
            </div>`
        },
        {
          id: "keyboard-shortcuts",
          title: "7. कीबोर्ड शॉर्टकट निर्देशिका",
          content: `<div>
              <p>अधिकतम दक्षता के लिए अपने कंप्यूटर कीबोर्ड से Virtue ऐप को पूरी तरह से संचालित करें:</p>
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1rem; margin-top: 1rem">
                <div style="padding: 1rem; border-radius: 8px; border: 1px solid var(--line); background-color: var(--surface)">
                  <code style="color: var(--accent); font-weight: bold">तीर कुंजियाँ (Up / Down)</code>
                  <p style="margin: 0.25rem 0 0 0; font-size: 0.85rem">ब्राउज़र सूची में प्लगइन्स के बीच ऊपर या नीचे जाने के लिए।</p>
                </div>
                <div style="padding: 1rem; border-radius: 8px; border: 1px solid var(--line); background-color: var(--surface)">
                  <code style="color: var(--accent); font-weight: bold">Enter / Return</code>
                  <p style="margin: 0.25rem 0 0 0; font-size: 0.85rem">चयनित प्लगइन को सक्रिय REAPER ट्रैक पर लोड करने के लिए।</p>
                </div>
                <div style="padding: 1rem; border-radius: 8px; border: 1px solid var(--line); background-color: var(--surface)">
                  <code style="color: var(--accent); font-weight: bold">Esc (Escape)</code>
                  <p style="margin: 0.25rem 0 0 0; font-size: 0.85rem">सेटिंग्स, पॉपअप या मुख्य विंडो बंद करने के लिए।</p>
                </div>
                <div style="padding: 1rem; border-radius: 8px; border: 1px solid var(--line); background-color: var(--surface)">
                  <code style="color: var(--accent); font-weight: bold">F</code>
                  <p style="margin: 0.25rem 0 0 0; font-size: 0.85rem">कीबोर्ड फोकस वापस ब्राउज़र सूची पर लाने के लिए।</p>
                </div>
                <div style="padding: 1rem; border-radius: 8px; border: 1px solid var(--line); background-color: var(--surface)">
                  <code style="color: var(--accent); font-weight: bold">Shift + क्लिक</code>
                  <p style="margin: 0.25rem 0 0 0; font-size: 0.85rem">एक साथ चेन लोड करने के लिए कई प्लगइन्स का चयन करने के लिए।</p>
                </div>
                <div style="padding: 1rem; border-radius: 8px; border: 1px solid var(--line); background-color: var(--surface)">
                  <code style="color: var(--accent); font-weight: bold">Cmd / Ctrl + क्लिक</code>
                  <p style="margin: 0.25rem 0 0 0; font-size: 0.85rem">असतत प्लगइन्स का चयन करने के लिए।</p>
                </div>
              </div>
            </div>`
        }
      ]
    },
    ar: {
      title: "دليل ووثائق Virtue FX Manager",
      subtitle: "تعلم كيفية تنظيم وتصفية وتحميل مكتبة المؤثرات الصوتية الضخمة الخاصة بك بصرياً وفورياً داخل برنامج REAPER.",
      langSelectLabel: "اختر اللغة",
      tableOfContents: "جدول المحتويات",
      searchPlaceholder: "البحث في المساعدة...",
      breadcrumbsHome: "المساعدة",
      categories: {
        setup: "التثبيت والتهيئة",
        workflows: "سير العمل الأساسي",
        organization: "تنظيم المكتبة",
        shortcuts: "اختصارات لوحة المفاتيح"
      },
      sections: [
        {
          id: "getting-started",
          title: "1. البدء وإعداد الفحص",
          content: `<div>
              <p>عند تشغيل Virtue FX Manager للمرة الأولى داخل REAPER، يقرأ التطبيق ذاكرة التخزين المؤقت لملفاتك لملء القائمة. للمحافظة على التحديثات:</p>
              <ul>
                <li><strong>تزامن التخزين المؤقت التلقائي:</strong> يكتشف التطبيق الإضافات الجديدة تلقائياً. في حال عدم ظهور أحدها، قم بإجراء فحص تقليدي في REAPER (<em>Options &gt; Preferences &gt; Plug-ins &gt; VST &gt; Re-scan</em>).</li>
                <li><strong>مسارات الفحص:</strong> في قائمة الإعدادات (أيقونة الترس)، تحقق من مسارات المجلدات لتتطابق تماماً مع مكان تثبيت ملفاتك.</li>
                <li><strong>تغيير اللغة:</strong> اختر لغتك المفضلة للواجهة، حيث يقوم التطبيق بتعريب القوائم وأشرطة الحالة وتلميحات الأدوات تلقائياً.</li>
              </ul>
            <div style="margin-top: 1.5rem; padding: 1rem; border-radius: var(--radius); border: 1px solid var(--accent-line); background-color: var(--accent-soft); color: var(--ink);">
                <strong style="color: var(--accent-strong); display: block; margin-bottom: 0.5rem;">🚀 سير عمل البدء السريع (كيفية المتابعة):</strong>
                <ol style="margin: 0; padding-left: 1.25rem; font-size: 0.95rem; line-height: 1.6;">
                  <li><strong>الإعداد الأولي:</strong> قم بتشغيل VfxM في REAPER، وتحقق من اختيار لغتك، وتأكيد مسارات المكونات الإضافية في الإعدادات.</li>
                  <li><strong>فحص مكتبتك:</strong> انتقل إلى الإعدادات (أيقونة الترس)، وانقر فوق <strong>إنشاء صور مصغرة</strong>، واختر <strong>فحص جميع العناصر المفقودة</strong>، ودع الماسح التلقائي يبني مكتبتك المرئية. أعد تشغيل REAPER واستأنف الفحص في حالة حدوث أي تعطل.</li>
                  <li><strong>التقاط يدوي:</strong> بالنسبة لأي مكونات إضافية محظورة أو غير متصلة بالإنترنت، افتح نافذة المكون الإضافي في REAPER، ومرر الماوس فوقها في VfxM، وانقر فوق <strong>أيقونة الكاميرا</strong> لالتقاط لقطة الشاشة يدويًا.</li>
                  <li><strong>تنظيم الفوضى:</strong> انقر بزر الماوس الأيمن واختر <strong>إخفاء / إزالة من القائمة</strong> لعزل النسخ التجريبية أو المكونات الإضافية المساعدة التي لا تحتاج إليها.</li>
                  <li><strong>إنشاء لوحات:</strong> انقر فوق أيقونة التبويب <strong>+</strong> لإنشاء لوحة جديدة (مثل "أصوات بشرية")، واسحب المكونات الإضافية المفضلة لديك إليها، ورتبها باستخدام التقييمات.</li>
                  <li><strong>الإدراج والمزج:</strong> انقر نقرًا مزدوجًا فوق أي بطاقة أو اسحبها مباشرةً إلى مساراتك لتحميلها على الفور.</li>
                </ol>
              </div>
            </div>`
        },
        {
          id: "visual-thumbnails",
          title: "2. نظام الصور المصغرة المرئية وأداة الكاميرا",
          content: `<div>
              <p>تم تصميم Virtue FX Manager حول تدفق مرئي. يمكنك تصفح المكونات الإضافية من خلال واجهات المستخدم الفعلية الخاصة بها بدلاً من السطور النصية العامة:</p>
              <ul>
                <li><strong>عرض الشبكة مقابل عرض القائمة:</strong> بدّل بين تخطيط البطاقات الرسومية وعرض قائمة بيانات التعريف باستخدام أزرار تبديل التخطيط في الجزء العلوي من المتصفح.</li>
                <li><strong>التقاط الكاميرا المدمجة:</strong> افتح واجهة المكون الإضافي المستهدف في REAPER، وحرك المؤشر فوق المكون الإضافي في Virtue، وانقر فوق <strong>أيقونة الكاميرا</strong> لالتقاط لقطة شاشة مخصصة واقتصاصها وتخزينها على الفور. أوامر الحافظة (<kbd>Cmd/Ctrl + C/V</kbd>) والتراجع/الإعادة (<kbd>Cmd/Ctrl + Z / Shift+Z</kbd>) مدعومة بالكامل.</li>
                <li><strong>ماسح الصور المصغرة التلقائي:</strong> استخدم أداة الفحص المجمعة المدمجة (المتاحة عبر أيقونة إعدادات الترس) لإنشاء مكتبتك المرئية بالكامل تلقائيًا في دقائق. يتم تشغيلها في الخلفية، وتحميل كل مكون إضافي بالتتابع على مسار مؤقت، والتقاط واجهته الرسومية وحفظها في شبكتك.</li>
                <li><strong>منع تعطف DAW وقائمة الحظر:</strong> لمنع تكرار الأعطال من المكونات الإضافية غير المستقرة أثناء الفحص، يتحقق VfxM مما إذا كانت المسارات الخارجية متصلة، ويتجاهل المكونات الإضافية غير المدرجة/المخفية، ويضع تلقائيًا أي مكونات إضافية معطلة في قائمة الحظر في الملف <code class="code-token">vt_scan_blocklist.txt</code>، ويتخطاها في عمليات التشغيل اللاحقة.</li>
                <li><strong>تأخير التقاط قابل للتكوين:</strong> قد تتطلب المكونات الإضافية ذات الرسوميات الثقيلة أو القائمة على وحدة معالجة الرسومات (GPU) وقتًا إضافيًا لتظهر بالكامل. اضبط إعداد تأخير التقاط الإطارات في لوحة الإعدادات لضمان الحصول على صور مصغرة نظيفة وخالية من التشوهات الرسومية.</li>
                <li><strong>الرسوم التوضيحية الافتراضية:</strong> يتم تضمين مجموعة من الرسوم التوضيحية الافتراضية لفئات المكونات الإضافية الشائعة للحفاظ على مظهر مكتبتك نظيفًا ومنظمًا منذ اليوم الأول.</li>
              </ul>
              <div style="margin-top: 1.5rem; padding: 1rem; border-radius: var(--radius); border: 1px solid rgba(220, 62, 54, 0.25); background-color: rgba(220, 62, 54, 0.05); color: var(--ink);">
                <strong style="color: #dc3e36; display: block; margin-bottom: 0.5rem;">⚠️ استقرار المضيف والاسترداد من الأعطال:</strong>
                يقوم الفحص المجمع بتحميل وتشغيل كل مكون إضافي في مكتبتك. قد تتسبب بعض المكونات الإضافية التابعة لجهات خارجية (خاصة تلك التي تحتوي على أغلفة توافق أو مشكلات في حماية النسخ) في تعطل REAPER. إذا حدث عطل:
                <ol style="margin-top: 0.5rem; margin-bottom: 0; padding-left: 1.25rem;">
                  <li>بساطة أعد تشغيل REAPER. سيقوم نظام الاسترداد في VfxM تلقائيًا بوضع المكون الإضافي المعطل في قائمة الحظر عن طريق إضافته إلى <code>vt_scan_blocklist.txt</code>.</li>
                  <li>افتح VfxM وأعد تشغيل الفحص. سيتم تخطي المكون الإضافي المعطل تلقائيًا ويستأنف فحص باقي مكتبتك بأمان.</li>
                  <li><strong>كيفية إلغاء الحظر:</strong> إذا كنت تريد إلغاء حظر مكون إضافي، فافتح <code>vt_scan_blocklist.txt</code> (الموجود في دليل موارد REAPER) في محرر نصوص، واحذف السطر المقابل للمكون الإضافي، واحفظ الملف.</li>
                </ol>
                <p style="margin-top: 0.5rem; font-size: 0.9rem;"><em>ملاحظة:</em> إذا كانت مكتبتك تحتوي على مكونات إضافية متعددة غير مستقرة، فقد تضطر إلى تشغيل عملية الفحص عدة مرات، وإعادة تشغيل REAPER بعد كل عطل، حتى يتم وضع جميع المكونات الإضافية الإشكالية في قائمة الحظر ومعالجة المكتبة بأكملها. بالإضافة إلى ذلك، قد تحتاج إلى تشغيل الفحص عدة مرات وإنشاء صور مصغرة عدة مرات، أو التقاط بعض الصور المصغرة يدويًا، لضمان التقاط جميع المكونات الإضافية بنجاح.</p>
              </div>
              <div style="margin-top: 1rem; padding: 1rem; border-radius: var(--radius); border: 1px solid var(--accent-line); background-color: var(--accent-soft); color: var(--ink);">
                <strong style="color: var(--accent-strong); display: block; margin-bottom: 0.5rem;">💾 متطلبات المساحة التخزينية:</strong>
                يتطلب إنشاء صور مصغرة مرئية للمكتبات الكبيرة مساحة قرص محلية (تستغرق كل لقطة شاشة مقصوصة ما يقرب من 20 كيلوبايت إلى 80 كيلوبايت). تأكد من أن محرك أقراص النظام لديك يحتوي على مساحة تخزين كافية قبل فحص مكتبتك بالكامل.
              </div>
            </div>`
        },
        {
          id: "track-insertion",
          title: "3. إدراج المكونات في المسارات (السحب والإفلات، النقر المزدوج)",
          content: `<div>
              <p>أضف معالجات الصوت إلى جلسات المكساج الخاصة بك دون الحاجة للتنقل عبر القوائم المعقدة المتداخلة:</p>
              <ul>
                <li><strong>النقر المزدوج:</strong> يؤدي النقر المزدوج على أي مكون في المتصفح أو القائمة إلى تحميله فوراً على مسار REAPER المحدد حالياً.</li>
                <li><strong>السحب والإفلات (Drag & Drop):</strong> اسحب بطاقة المكون مباشرة من نافذة Virtue وأفلتها على لوحة التحكم بالمسار، أو قنوات الميكسر، أو مساحة فارغة في المخطط الزمني (مما يؤدي لإنشاء مسار جديد تلقائياً).</li>
                <li><strong>التحميل الجماعي:</strong> اختر مكونات متعددة باستخدام مفاتيح **Ctrl+Click** أو **Cmd+Click** (Mac) واسحبها أو انقر نقراً مزدوجاً لتحميل السلسلة بالكامل بالتتابع.</li>
              </ul>
            </div>`
        },
        {
          id: "status-circles",
          title: "4. دوائر حالة المكون (المدرجة مقابل المخفية)",
          content: `<div>
              <p>حافظ على نظافة قائمتك عن طريق تصفية المكونات المكررة أو المساعدة غير المطلوبة عبر نظام جدار الحماية:</p>
              <div style="display: flex; gap: 1.5rem; margin: 1rem 0; flex-wrap: wrap">
                <div style="flex: 1 1 200px; padding: 1rem; border-radius: 8px; border: 1px solid var(--line); background-color: rgba(46, 204, 113, 0.08)">
                  <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem">
                    <span style="display: inline-block; width: 10px; height: 10px; border-radius: 50%; background-color: #2ecc71"></span>
                    <strong>الأخضر (مدرج / نشط):</strong>
                  </div>
                  <p style="margin: 0; font-size: 0.9rem">مرئي في المتصفح والبحث. المكون نشط وجاهز للتحميل.</p>
                </div>
                <div style="flex: 1 1 200px; padding: 1rem; border-radius: 8px; border: 1px solid var(--line); background-color: rgba(220, 62, 54, 0.08)">
                  <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem">
                    <span style="display: inline-block; width: 10px; height: 10px; border-radius: 50%; background-color: #dc3e36"></span>
                    <strong>الأحمر (مخفي / Unlisted):</strong>
                  </div>
                  <p style="margin: 0; font-size: 0.9rem">مخفي لتجنب الفوضى. انقر بزر الماوس الأيمن واختر "فرض إعادة التنشيط" لاستعادته.</p>
                </div>
              </div>
            </div>`
        },
        {
          id: "color-codes",
          title: "5. رموز الألوان وفئات الصوت",
          content: `<div>
              <p>يخصص Virtue ألواناً لفئات الصوت وتنسيقات المعالجة. عند تفعيل خيار "تلوين القائمة حسب الفئة" في قائمة الإعدادات (رمز الترس)، ستظهر أسماء المكونات الإضافية ديناميكياً بهذه الألوان في عرض القائمة:</p>
              <div style="overflow-x: auto">
                <table style="width: 100%; border-collapse: collapse; margin-top: 1rem; font-size: 0.9rem">
                  <thead>
                    <tr style="border-bottom: 2px solid var(--line); text-align: left">
                      <th style="padding: 0.75rem">اللون</th>
                      <th style="padding: 0.75rem">الفئة الصوتية</th>
                      <th style="padding: 0.75rem">أمثلة وعلامات المطابقة</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style="border-bottom: 1px solid var(--line)">
                      <td style="padding: 0.75rem; display: flex; align-items: center; gap: 0.5rem">
                        <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background-color: #33b8ff"></span> أزرق
                      </td>
                      <td style="padding: 0.75rem"><strong>المعادِلات والفلاتر (EQ)</strong></td>
                      <td style="padding: 0.75rem">EQ, Equalizer, Filter, معادل ديناميكي</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--line)">
                      <td style="padding: 0.75rem; display: flex; align-items: center; gap: 0.5rem">
                        <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background-color: #ff9433"></span> برتقالي
                      </td>
                      <td style="padding: 0.75rem"><strong>الديناميكيات والضواغط</strong></td>
                      <td style="padding: 0.75rem">Compressor, Limiter, Noise Gate, معالج عابر</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--line)">
                      <td style="padding: 0.75rem; display: flex; align-items: center; gap: 0.5rem">
                        <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background-color: #b27aff"></span> بنفسجي
                      </td>
                      <td style="padding: 0.75rem"><strong>الصدى والمساحة (Reverb)</strong></td>
                      <td style="padding: 0.75rem">Reverb, Space, Room, Plate Reverb</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--line)">
                      <td style="padding: 0.75rem; display: flex; align-items: center; gap: 0.5rem">
                        <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background-color: #2edbd1"></span> تركواز
                      </td>
                      <td style="padding: 0.75rem"><strong>التأخير والصدى (Delay)</strong></td>
                      <td style="padding: 0.75rem">Delay, Echo, تأخير شريطي</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--line)">
                      <td style="padding: 0.75rem; display: flex; align-items: center; gap: 0.5rem">
                        <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background-color: #56e673"></span> أخضر
                      </td>
                      <td style="padding: 0.75rem"><strong>التعديل الارتجاجي (Modulation)</strong></td>
                      <td style="padding: 0.75rem">Chorus, Flanger, Phaser, Tremolo</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--line)">
                      <td style="padding: 0.75rem; display: flex; align-items: center; gap: 0.5rem">
                        <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background-color: #ff6cbe"></span> وردي
                      </td>
                      <td style="padding: 0.75rem"><strong>الآلات والمولفات الصوتية</strong></td>
                      <td style="padding: 0.75rem">Synth, Sampler, VSTi, مولف صوتي، درامز، بيانو</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--line)">
                      <td style="padding: 0.75rem; display: flex; align-items: center; gap: 0.5rem">
                        <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background-color: #ff473d"></span> أحمر
                      </td>
                      <td style="padding: 0.75rem"><strong>التشوه والتشبع (Distortion)</strong></td>
                      <td style="padding: 0.75rem">Distortion, Saturation, محاكاة مكبر صوت، أوفر درايف</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--line)">
                      <td style="padding: 0.75rem; display: flex; align-items: center; gap: 0.5rem">
                        <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background-color: #b7bcca"></span> رمادي
                      </td>
                      <td style="padding: 0.75rem"><strong>الأدوات والمقاييس</strong></td>
                      <td style="padding: 0.75rem">Utility, Meter, Analyzer, راسم الذبذبات</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--line)">
                      <td style="padding: 0.75rem; display: flex; align-items: center; gap: 0.5rem">
                        <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background-color: #ffd63d"></span> أصفر
                      </td>
                      <td style="padding: 0.75rem"><strong>معالجات MIDI</strong></td>
                      <td style="padding: 0.75rem">MIDI Chorder, منظم الأوتار، منظم تدرج النغمات</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="color-list-demo-placeholder"></div>
            </div>`
        },
        {
          id: "favorites-organization",
          title: "6. علامات التبويب المفضلة والتنظيم مخصص",
          content: `<div>
              <p>احفظ الإضافات وسلاسل المعالجة الأكثر استخداماً في مجموعات علامات تبويب مخصصة:</p>
              <ul>
                <li><strong>إدارة علامات التبويب:</strong> انقر بزر الماوس الأيمن على علامات التبويب لإنشاء علامة جديدة. أعد التسمية بالنقر المزدوج، أو اسحب علامات التبويب أفقياً لإعادة ترتيبها.</li>
                <li><strong>الإضافة للمفضلة:</strong> اختر مكوناً في المتصفح واضغط "إضافة للمفضلة"، أو انقر بزر الماوس الأيمن لإضافته إلى علامة التبويب النشطة حالياً.</li>
                <li><strong>سلاسل المؤثرات الجاهزة:</strong> احفظ السلسلة كاملة كـ FX Chain في REAPER وثبتها داخل Virtue لتسترجعها بالكامل بنقرة واحدة.</li>
                <li><strong>ملاحظات مخصصة:</strong> اكتب ملاحظات أو تلميحات توزيع واستخدام مخصصة لكل مكون في لوحة الملاحظات. تظل هذه الملاحظات محفوظة بشكل عام.</li>
              </ul>
            </div>`
        },
        {
          id: "keyboard-shortcuts",
          title: "7. دليل اختصارات لوحة المفاتيح",
          content: `<div>
              <p>تحكم في المتصفح بكفاءة وسرعة كاملة مباشرة عبر لوحة مفاتيح حاسوبك:</p>
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1rem; margin-top: 1rem">
                <div style="padding: 1rem; border-radius: 8px; border: 1px solid var(--line); background-color: var(--surface)">
                  <code style="color: var(--accent); font-weight: bold">مفاتيح الأسهم (أعلى / أسفل)</code>
                  <p style="margin: 0.25rem 0 0 0; font-size: 0.85rem">للتنقل وتغيير تحديد المكونات في قائمة المتصفح.</p>
                </div>
                <div style="padding: 1rem; border-radius: 8px; border: 1px solid var(--line); background-color: var(--surface)">
                  <code style="color: var(--accent); font-weight: bold">زر الإدخال (Enter)</code>
                  <p style="margin: 0.25rem 0 0 0; font-size: 0.85rem">لتحميل المكون المحدد فوراً على مسار REAPER النشط.</p>
                </div>
                <div style="padding: 1rem; border-radius: 8px; border: 1px solid var(--line); background-color: var(--surface)">
                  <code style="color: var(--accent); font-weight: bold">زر الهروب (Esc)</code>
                  <p style="margin: 0.25rem 0 0 0; font-size: 0.85rem">لإغلاق نافذة الإعدادات أو القوائم المنبثقة أو الواجهة الرئيسية.</p>
                </div>
                <div style="padding: 1rem; border-radius: 8px; border: 1px solid var(--line); background-color: var(--surface)">
                  <code style="color: var(--accent); font-weight: bold">حرف F</code>
                  <p style="margin: 0.25rem 0 0 0; font-size: 0.85rem">لإعادة تركيز لوحة المفاتيح على قائمة البحث في المتصفح.</p>
                </div>
                <div style="padding: 1rem; border-radius: 8px; border: 1px solid var(--line); background-color: var(--surface)">
                  <code style="color: var(--accent); font-weight: bold">Shift + نقرة</code>
                  <p style="margin: 0.25rem 0 0 0; font-size: 0.85rem">لتحديد مجموعة متتالية من المكونات لتحميلها كسلسلة كاملة.</p>
                </div>
                <div style="padding: 1rem; border-radius: 8px; border: 1px solid var(--line); background-color: var(--surface)">
                  <code style="color: var(--accent); font-weight: bold">Cmd / Ctrl + نقرة</code>
                  <p style="margin: 0.25rem 0 0 0; font-size: 0.85rem">لتحديد مكونات متعددة غير متتالية في القائمة.</p>
                </div>
              </div>
            </div>`
        }
      ]
    },
    bn: {
      title: "Virtue FX Manager উইকি ও ডকুমেন্টেশন",
      subtitle: "REAPER-এর ভেতরে আপনার বিশাল প্লাগইন লাইব্রেরি কীভাবে সহজে সাজাবেন, খুঁজবেন এবং লোড করবেন তা শিখুন।",
      langSelectLabel: "ভাষা নির্বাচন করুন",
      tableOfContents: "সূচিপত্র",
      searchPlaceholder: "সাহায্য খুঁজুন...",
      breadcrumbsHome: "সাহায্য",
      categories: {
        setup: "সেটআপ ও কনফিগারেশন",
        workflows: "মূল ওয়ার্কফ্লো",
        organization: "লাইব্রেরি সংগঠন",
        shortcuts: "কীবোর্ড শর্টকাট"
      },
      sections: [
        {
          id: "getting-started",
          title: "১. শুরুতে কীভাবে ব্যবহার করবেন ও স্ক্যান সেটআপ",
          content: `<div>
              <p>আপনি যখন প্রথমবার REAPER-এ Virtue FX Manager খুলবেন, তখন এটি আপনার প্লাগইন তালিকা তৈরি করার জন্য REAPER-এর ক্যাশ ফাইল পড়ে। সবকিছু সিঙ্ক রাখার জন্য:</p>
              <ul>
                <li><strong>স্বয়ংক্রিয় ক্যাশ সিঙ্ক:</strong> Virtue নতুন স্ক্যান করা প্লাগইনগুলো স্বয়ংক্রিয়ভাবে সনাক্ত করে। যদি কোনো প্লাগইন তালিকাভুক্ত না থাকে, তবে REAPER-এ স্ট্যান্ডার্ড স্ক্যান করুন (<em>Options &gt; Preferences &gt; Plug-ins &gt; VST &gt; Re-scan</em>)।</li>
                <li><strong>স্ক্যান ডিরেক্টরি:</strong> সেটিংস প্যানেলে (গিয়ার আইকন), নিশ্চিত করুন যে আপনার সিস্টেমের প্লাগইন ফোল্ডার পাথ আপনার প্লাগইন ইনস্টলেশন পাথের সাথে মিলছে।</li>
                <li><strong>ভাষা সেটিংস:</strong> আপনার পছন্দের ভাষা নির্বাচন করুন। অ্যাপটি স্বয়ংক্রিয়ভাবে মেনু, স্ট্যাটাস বার এবং টিপসগুলোকে আপনার ভাষায় রুপান্তর করবে।</li>
              </ul>
            <div style="margin-top: 1.5rem; padding: 1rem; border-radius: var(--radius); border: 1px solid var(--accent-line); background-color: var(--accent-soft); color: var(--ink);">
                <strong style="color: var(--accent-strong); display: block; margin-bottom: 0.5rem;">🚀 কুইক স্টার্ট ওয়ার্কফ্লো (কীভাবে এগিয়ে যাবেন):</strong>
                <ol style="margin: 0; padding-left: 1.25rem; font-size: 0.95rem; line-height: 1.6;">
                  <li><strong>প্রাথমিক সেটআপ:</strong> REAPER-এ VfxM চালু করুন, আপনার ভাষা নির্বাচন যাচাই করুন এবং সেটিংসে প্লাগইন পাথ নিশ্চিত করুন।</li>
                  <li><strong>লাইব্রেরি স্ক্যান করুন:</strong> সেটিংসে যান (গিয়ার আইকন), <strong>থাম্বনেইল তৈরি করুন</strong> ক্লিক করুন, <strong>সমস্ত অনুপস্থিত স্ক্যান করুন</strong> চয়ন করুন এবং অটো স্ক্যানারকে আপনার ভিজ্যুয়াল লাইব্রেরি তৈরি করতে দিন। কোনো ক্র্যাশ ঘটলে REAPER পুনরায় চালু করুন এবং স্ক্যান পুনরায় শুরু করুন।</li>
                  <li><strong>ম্যানুয়াল ক্যাপচার:</strong> যেকোনো ব্লক তালিকাভুক্ত বা অফলাইন প্লাগইনের জন্য, REAPER-এ প্লাগইন উইন্ডোটি ভাসমান অবস্থায় খুলুন, VfxM-এ সেটির ওপর মাউस ঘোরান এবং স্ক্রিনটি ম্যানুয়ালি ক্যাপচার করতে <strong>ক্যামেরা আইকন</strong> ক্লিক করুন।</li>
                  <li><strong>বিশৃঙ্খলতা দূর করুন:</strong> আপনার প্রয়োজন নেই এমন ট্রায়াল সংস্করণ বা ইউটিলিটি প্লাগইনগুলিকে আলাদা করতে ডান-ক্লিক করুন এবং <strong>লুকান / তালিকা থেকে সরান</strong> চয়ন করুন।</li>
                  <li><strong>বোর্ড তৈরি করুন:</strong> একটি নতুন বোর্ড তৈরি করতে <strong>+</strong> ট্যাব আইকন ক্লিক করুন (যেমন "ভোকাল"), আপনার প্রিয় প্লাগইনগুলি টেনে আনুন এবং রেटिंग ব্যবহার করে সেগুলি সাজান।</li>
                  <li><strong>ইনসার্ট ও মিক্স করুন:</strong> তাত্ক্ষণিকভাবে লোড করতে যেকোনো কার্ডের ওপর ডابل-ক্লিক করুন বা সরাসরি আপনার ট্র্যাকে টেনে আনুন।</li>
                </ol>
              </div>
            </div>`
        },
        {
          id: "visual-thumbnails",
          title: "২. ভিজ্যুয়াল থাম্বনেইল সিস্টেম এবং ক্যামেরা ইউটিলিটি",
          content: `<div>
              <p>Virtue FX Manager একটি ভিজ্যুয়াল ফ্লোর উপর ভিত্তি করে তৈরি। আপনি সাধারণ টেক্সট লাইনের পরিবর্তে প্লাগইনগুলির প্রকৃত ইউজার ইন্টারফেস দেখে সেগুলি ব্রাউজ করতে পারেন:</p>
              <ul>
                <li><strong>গ্রিড ভিউ বনাম লিস্ট ভিউ:</strong> ব্রাউজারের শীর্ষে থাকা লেআউট সুইচার বোতাম ব্যবহার করে গ্রাফিক্যাল কার্ড লেআউট এবং মেটাডেটা স্প্রেডশীট তালিকা ভিউয়ের মধ্যে সুইচ করুন।</li>
                <li><strong>বিল্ট-ইন ক্যামেরা ক্যাপচার:</strong> REAPER-এ টার্গেট প্লাগইন ইন্টারফেসটি খুলুন, Virtue-এ প্লাগইনের উপর মাউস ঘোরান এবং একটি কাস্টম স্ক্রিনশট তাত্ক্ষণিকভাবে ক্যাপচার, ক্রপ এবং সংরক্ষণ করতে <strong>ক্যামেরা আইকন</strong>-এ ক্লিক করুন। ক্লিপবোর্ড কমান্ড (<kbd>Cmd/Ctrl + C/V</kbd>) এবং আনডু/রিডু (<kbd>Cmd/Ctrl + Z / Shift+Z</kbd>) সম্পূর্ণরূপে সমর্থিত।</li>
                <li><strong>অটো থাম্বনেইল স্ক্যানার:</strong> কয়েক মিনিটের মধ্যে আপনার সম্পূর্ণ ভিজ্যুয়াল লাইব্রেরি স্বয়ংক্রিয়ভাবে তৈরি করতে বিল্ট-ইন ব্যাচ স্ক্যান ইউটিলিটি (গিয়ার সেটিংস আইকনের মাধ্যমে অ্যাক্সেসযোগ্য) ব্যবহার করুন। এটি ব্যাকগ্রাউন্ডে চলে, প্রতিটি প্লাগইনকে ক্রমানুসারে একটি অস্থায়ী ট্র্যাকে লোড করে, তার গ্রাফিক্যাল ইন্টারফেস ক্যাপচার করে এবং এটি আপনার গ্রিডে সংরক্ষণ করে。</li>
                <li><strong>DAW ক্র্যাশ প্রতিরোধ এবং ব্লক তালিকা:</strong> স্ক্যান করার সময় অস্থির প্লাগইনগুলির কারণে ক্র্যাশ লুপ প্রতিরোধ করতে, VfxM চেক করে যে বাহ্যিক পাথগুলি অনলাইন আছে কিনা, তালিকাভুক্ত নয়/লুকানো প্লাগইনগুলিকে উপেক্ষা করে এবং স্বয়ংক্রিয়ভাবে ক্র্যাশ হওয়া প্লাগইনগুলিকে <code class="code-token">vt_scan_blocklist.txt</code> ফাইলে ব্লক তালিকাভুক্ত করে, পরবর্তী রানগুলিতে সেগুলি এড়িয়ে যায়।</li>
                <li><strong>কনফিগারযোগ্য ক্যাপচার বিলম্ব:</strong> ভারী গ্রাফিক্স বা জিপিইউ-ভিত্তিক প্লাগইনগুলির সম্পূর্ণরূপে রেন্ডার হতে অতিরিক্ত সময়ের প্রয়োজন হতে পারে। পরিষ্কার, নয়েজ-মুক্ত থাম্বনেইল নিশ্চিত করতে সেটিংস প্যানেলে ক্যাপচার বিলম্ব সেটিং (ফ্রেমে) সামঞ্জস্য করুন।</li>
                <li><strong>ডিফল্ট ইলাস্ট্রেশন:</strong> প্রথম দিন থেকেই আপনার লাইব্রেরির চমৎকার ভিজ্যুয়াল বজায় রাখতে সাধারণ প্লাগইন ক্যাটাগরির জন্য এক সেট ডিফল্ট ইলাস্ট্রেশন অন্তর্ভুক্ত করা হয়েছে।</li>
              </ul>
              <div style="margin-top: 1.5rem; padding: 1rem; border-radius: var(--radius); border: 1px solid rgba(220, 62, 54, 0.25); background-color: rgba(220, 62, 54, 0.05); color: var(--ink);">
                <strong style="color: #dc3e36; display: block; margin-bottom: 0.5rem;">⚠️ হোস্টের স্থায়িত্ব এবং ক্র্যাশ পুনরুদ্ধার:</strong>
                ব্যাচ স্ক্যানিং আপনার লাইব্রেরির প্রতিটি প্লাগইন লোড এবং ইনস্ট্যান্সিয়েট করে। কিছু থার্ড-পার্টি প্লাগইন (বিশেষ করে যেগুলিতে সামঞ্জস্যপূর্ণ র্যাপার বা কপি-প্রটেকশন ইনিশিয়ালাইজেশন সমস্যা রয়েছে) REAPER ক্র্যাশ করতে পারে। যদি ক্র্যাশ ঘটে:
                <ol style="margin-top: 0.5rem; margin-bottom: 0; padding-left: 1.25rem;">
                  <li>সহজেই REAPER পুনরায় চালু করুন। VfxM-এর স্টার্টআপ পুনরুদ্ধার স্বয়ংক্রিয়ভাবে ক্র্যাশ হওয়া প্লাগইনটিকে <code>vt_scan_blocklist.txt</code> ফাইলে যুক্ত করে ব্লক তালিকাভুক্ত করবে।</li>
                  <li>VfxM খুলুন এবং স্ক্যান পুনরায় শুরু করুন। এটি ক্র্যাশ হওয়া প্লাগইনটিকে এড়িয়ে যাবে এবং আপনার লাইব্রেরির বাকি অংশ নিরাপদে স্ক্যান করা চালিয়ে যাবে।</li>
                  <li><strong>কীভাবে আনব্লক করবেন:</strong> আপনি যদি কোনও প্লাগইন আনব্লক করতে চান তবে একটি টেক্সট এডিটরে <code>vt_scan_blocklist.txt</code> (আপনার REAPER রিসোর্স ডিরেক্টরিতে অবস্থিত) ফাইলটি খুলুন, প্লাগইন সম্পর্কিত লাইনটি মুছে ফেলুন এবং ফাইলটি সংরক্ষণ করুন।</li>
                </ol>
                <p style="margin-top: 0.5rem; font-size: 0.9rem;"><em>দ্রষ্টব্য:</em> যদি আপনার লাইব্রেরিতে একাধিক অস্থির প্লাগইন থাকে, তবে সমস্ত সমস্যাযুক্ত প্লাগইন ব্লক তালিকাভুক্ত না হওয়া এবং সম্পূর্ণ লাইব্রেরিটি প্রক্রিয়াকরণ না হওয়া পর্যন্ত প্রতিটি ক্র্যাশের পরে REAPER পুনরায় চালু করে আপনাকে একাধিকবার স্ক্যান প্রক্রিয়াটি চালাতে হতে পারে। অতিরিক্তভাবে, সমস্ত প্লাগইন সফলভাবে ক্যাপচার করা হয়েছে তা নিশ্চিত করতে আপনাকে একাধিকবার স্ক্যান চালাতে হতে পারে এবং একাধিকবার থাম্বনেইল তৈরি করতে হতে পারে, অথবা কিছু থাম্বনেইল ম্যানুয়ালি ক্যাপচার করতে হতে পারে।</p>
              </div>
              <div style="margin-top: 1rem; padding: 1rem; border-radius: var(--radius); border: 1px solid var(--accent-line); background-color: var(--accent-soft); color: var(--ink);">
                <strong style="color: var(--accent-strong); display: block; margin-bottom: 0.5rem;">💾 স্টোরেজ প্রয়োজনীয়তা:</strong>
                বড় লাইব্রেরির জন্য ভিজ্যুয়াল থাম্বনেইল তৈরি করতে স্থানীয় ডিস্ক স্পেস প্রয়োজন (প্রতিটি ক্রপ করা স্ক্রিনশট প্রায় ২০KB-৮০KB জায়গা নেয়)। আপনার সম্পূর্ণ লাইব্রেরি স্ক্যান করার আগে আপনার sistem ড্রাইভে পর্যাপ্ত ফ্রি স্টোরেজ আছে কিনা তা নিশ্চিত করুন।
              </div>
            </div>`
        },
        {
          id: "track-insertion",
          title: "৩. ট্র্যাকে প্লাগইন যুক্ত করা (ড্র্যাগ-এন্ড-ড্রপ ও ডাবল-ক্লিক)",
          content: `<div>
              <p>জটিল রাইট-ক্লিক মেনু ছাড়াই এক ক্লিকে প্লাগইনগুলো আপনার ট্র্যাকে লোড করুন:</p>
              <ul>
                <li><strong>ডাবল-ক্লিক:</strong> ব্রাউজারে বা তালিকা ভিউতে যেকোনো প্লাগইনের ওপর ডাবল-ক্লিক করলে তা সাথে সাথে REAPER-এর নির্বাচিত ট্র্যাকে লোড হয়ে যায়।</li>
                <li><strong>ড্র্যাগ এন্ড ড্রপ:</strong> প্লাগইন কার্ডটি সরাসরি Virtue উইন্ডো থেকে টেনে এনে ট্র্যাক কন্ট্রোল প্যানেল, মিক্সার চ্যানেল বা টাইমলাইনের ফাঁকা জায়গায় ছেড়ে দিন (ফাঁকা জায়গায় ছাড়লে নতুন ট্র্যাক তৈরি হবে)।</li>
                <li><strong>ব্যাচ লোড:</strong> **Ctrl+ক্লিক** বা **Cmd+ক্লিক** (Mac) ব্যবহার করে একাধিক প্লাগইন নির্বাচন করুন, তারপর একসাথে ট্র্যাকে লোড করতে ডাবল-ক্লিক বা ড্র্যাগ করুন।</li>
              </ul>
            </div>`
        },
        {
          id: "status-circles",
          title: "৪. প্লাগইন স্ট্যাটাস বৃত্ত (Listed বনাম Unlisted)",
          content: `<div>
              <p>ফায়ারওয়াল সিস্টেম ব্যবহার করে অপ্রয়োজনীয় বা ডুপ্লিকেট প্লাগইনগুলো লুকিয়ে রাখুন:</p>
              <div style="display: flex; gap: 1.5rem; margin: 1rem 0; flex-wrap: wrap">
                <div style="flex: 1 1 200px; padding: 1rem; border-radius: 8px; border: 1px solid var(--line); background-color: rgba(46, 204, 113, 0.08)">
                  <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem">
                    <span style="display: inline-block; width: 10px; height: 10px; border-radius: 50%; background-color: #2ecc71"></span>
                    <strong>সবুজ (Listed / সক্রিয়):</strong>
                  </div>
                  <p style="margin: 0; font-size: 0.9rem">ব্রাউজার তালিকায় প্রদর্শিত হয়। এর অর্থ প্লাগইনটি সক্রিয় এবং লোড করার জন্য প্রস্তুত।</p>
                </div>
                <div style="flex: 1 1 200px; padding: 1rem; border-radius: 8px; border: 1px solid var(--line); background-color: rgba(220, 62, 54, 0.08)">
                  <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem">
                    <span style="display: inline-block; width: 10px; height: 10px; border-radius: 50%; background-color: #dc3e36"></span>
                    <strong>লাল (লুকানো / Unlisted):</strong>
                  </div>
                  <p style="margin: 0; font-size: 0.9rem">মূল তালিকা থেকে লুকানো। এটিকে পুনরায় দেখাতে রাইট-ক্লিক করুন এবং "Force Reactivate" নির্বাচন করুন।</p>
                </div>
              </div>
            </div>`
        },
        {
          id: "color-codes",
          title: "৫. রেটিং ও ক্যাটাগরি রঙ কোড",
          content: `<div>
              <p>Virtue ক্যাটাগরির ওপর ভিত্তি করে প্লাগইনগুলোতে নির্দিষ্ট রঙ কোড বরাদ্দ করে। সেটিংস মেনুতে (গিয়ার আইকন) "ক্যাটাগরি অনুযায়ী রঙিন তালিকা" বিকল্পটি চালু করলে প্লাগইন তালিকা ভিউতে নামগুলো রঙিন দেখাবে:</p>
              <div style="overflow-x: auto">
                <table style="width: 100%; border-collapse: collapse; margin-top: 1rem; font-size: 0.9rem">
                  <thead>
                    <tr style="border-bottom: 2px solid var(--line); text-align: left">
                      <th style="padding: 0.75rem">রঙ</th>
                      <th style="padding: 0.75rem">ক্যাটাগরি</th>
                      <th style="padding: 0.75rem">উদাহরণ / নাম</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style="border-bottom: 1px solid var(--line)">
                      <td style="padding: 0.75rem; display: flex; align-items: center; gap: 0.5rem">
                        <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background-color: #33b8ff"></span> নীল
                      </td>
                      <td style="padding: 0.75rem"><strong>EQ & ফিল্টার</strong></td>
                      <td style="padding: 0.75rem">EQ, Equalizer, Filter, ডায়নামিক EQ</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--line)">
                      <td style="padding: 0.75rem; display: flex; align-items: center; gap: 0.5rem">
                        <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background-color: #ff9433"></span> কমলা
                      </td>
                      <td style="padding: 0.75rem"><strong>ডায়নামিকস & কম্প্রেসর</strong></td>
                      <td style="padding: 0.75rem">Compressor, Limiter, Noise Gate, এক্সপ্যান্ডার</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--line)">
                      <td style="padding: 0.75rem; display: flex; align-items: center; gap: 0.5rem">
                        <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background-color: #b27aff"></span> বেগুনি
                      </td>
                      <td style="padding: 0.75rem"><strong>রিভার্ব & স্পেস</strong></td>
                      <td style="padding: 0.75rem">Reverb, Space, Room, প্লেট রিভার্ব, হল রিভার্ব</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--line)">
                      <td style="padding: 0.75rem; display: flex; align-items: center; gap: 0.5rem">
                        <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background-color: #2edbd1"></span> ফিরোজা
                      </td>
                      <td style="padding: 0.75rem"><strong>ডিলে & ইকো</strong></td>
                      <td style="padding: 0.75rem">Delay, Echo, টেপ ডিলে</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--line)">
                      <td style="padding: 0.75rem; display: flex; align-items: center; gap: 0.5rem">
                        <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background-color: #56e673"></span> সবুজ
                      </td>
                      <td style="padding: 0.75rem"><strong>মড্যুলেশন</strong></td>
                      <td style="padding: 0.75rem">Chorus, Flanger, Phaser, ট্রেমোলো, কোরাস</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--line)">
                      <td style="padding: 0.75rem; display: flex; align-items: center; gap: 0.5rem">
                        <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background-color: #ff6cbe"></span> গোলাপি
                      </td>
                      <td style="padding: 0.75rem"><strong>ইনস্ট্রুমেন্টস & সিন্থেসাইজার</strong></td>
                      <td style="padding: 0.75rem">Synth, Sampler, VSTi, ভার্চুয়াল সিন্থ, ড্রাম, পিয়ানো</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--line)">
                      <td style="padding: 0.75rem; display: flex; align-items: center; gap: 0.5rem">
                        <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background-color: #ff473d"></span> লাল
                      </td>
                      <td style="padding: 0.75rem"><strong>ডিস্টরশন & স্যাচুরেশন</strong></td>
                      <td style="padding: 0.75rem">Distortion, Saturation, Amp, অ্যাম্প সিমুলেটর, ওভারড্রাইভ</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--line)">
                      <td style="padding: 0.75rem; display: flex; align-items: center; gap: 0.5rem">
                        <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background-color: #b7bcca"></span> ধূসর
                      </td>
                      <td style="padding: 0.75rem"><strong>ইউটিলিটি & মিটার</strong></td>
                      <td style="padding: 0.75rem">Utility, Meter, Analyzer, স্পেকট্রাম বিশ্লেষক</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--line)">
                      <td style="padding: 0.75rem; display: flex; align-items: center; gap: 0.5rem">
                        <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background-color: #ffd63d"></span> হলুদ
                      </td>
                      <td style="padding: 0.75rem"><strong>MIDI প্রসেসর</strong></td>
                      <td style="padding: 0.75rem">MIDI Chorder, আরপেজিয়েটর, MIDI রাউটিং টুলস</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="color-list-demo-placeholder"></div>
            </div>`
        },
        {
          id: "favorites-organization",
          title: "৬. প্রিয় ট্যাব এবং কাস্টম প্লাগইন তালিকা",
          content: `<div>
              <p>আপনার সবচেয়ে প্রয়োজনীয় প্লাগইন এবং চেইনগুলোকে প্রিয় ট্যাবে সাজান:</p>
              <ul>
                <li><strong>ট্যাব কাস্টমাইজ করা:</strong> নতুন ট্যাব তৈরি করতে ট্যাব হেডারের ওপর রাইট-ক্লিক করুন। নাম পরিবর্তন করতে ডাবল-ক্লিক করুন, অথবা তাদের অবস্থান সাজাতে ট্যাবটি টেনে আনুন।</li>
                <li><strong>প্রিয় তালিকায় যুক্ত করুন:</strong> ব্রাউজারে যেকোনো প্লাগইন নির্বাচন করে "প্রিয় তালিকায় যুক্ত করুন" বোতামে ক্লিক করুন, অথবা প্লাগইন নামের ওপর রাইট-ক্লিক করে সক্রিয় ট্যাবে যোগ করুন।</li>
                <li><strong>FX চেইন ও প্রিসেট:</strong> REAPER-এ আপনার ইফেক্টস চেইনগুলোকে FX Chain হিসেবে সংরক্ষণ করুন এবং এক ক্লিকে লোড করতে Virtue ট্যাবে পিন করুন।</li>
                <li><strong>কাস্টম নোটস:</strong> প্লাগইন নির্বাচন করে সরাসরি নোটস প্যানেলে মিক্সিং টিপস বা পরামর্শ লিখুন। এই নোটগুলো আপনার সমস্ত প্রজেক্টে সংরক্ষিত থাকবে।</li>
              </ul>
            </div>`
        },
        {
          id: "keyboard-shortcuts",
          title: "৭. কিবোর্ড শর্টকাট গাইড",
          content: `<div>
              <p>দ্রুত কাজের জন্য আপনার কম্পিউটার কিবোর্ড ব্যবহার করে Virtue অ্যাপটি পরিচালনা করুন:</p>
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1rem; margin-top: 1rem">
                <div style="padding: 1rem; border-radius: 8px; border: 1px solid var(--line); background-color: var(--surface)">
                  <code style="color: var(--accent); font-weight: bold">তীর কুঞ্জি (Up / Down)</code>
                  <p style="margin: 0.25rem 0 0 0; font-size: 0.85rem">ব্রাউজার তালিকায় প্লাগইনগুলোর মধ্যে ওপরে বা নিচে যাওয়ার জন্য।</p>
                </div>
                <div style="padding: 1rem; border-radius: 8px; border: 1px solid var(--line); background-color: var(--surface)">
                  <code style="color: var(--accent); font-weight: bold">Enter / Return</code>
                  <p style="margin: 0.25rem 0 0 0; font-size: 0.85rem">নির্বাচিত প্লাগইনটিকে সক্রিয় REAPER ট্র্যাকে লোড করার জন্য।</p>
                </div>
                <div style="padding: 1rem; border-radius: 8px; border: 1px solid var(--line); background-color: var(--surface)">
                  <code style="color: var(--accent); font-weight: bold">Esc (Escape)</code>
                  <p style="margin: 0.25rem 0 0 0; font-size: 0.85rem">সেটিংস প্যানেল, পপআপ বা প্রধান উইন্ডো বন্ধ করার জন্য।</p>
                </div>
                <div style="padding: 1rem; border-radius: 8px; border: 1px solid var(--line); background-color: var(--surface)">
                  <code style="color: var(--accent); font-weight: bold">F বোতাম</code>
                  <p style="margin: 0.25rem 0 0 0; font-size: 0.85rem">কিবোর্ড ফোকাস আবার ব্রাউজার তালিকার ওপর ফিরিয়ে নেওয়ার জন্য।</p>
                </div>
                <div style="padding: 1rem; border-radius: 8px; border: 1px solid var(--line); background-color: var(--surface)">
                  <code style="color: var(--accent); font-weight: bold">Shift + ক্লিক</code>
                  <p style="margin: 0.25rem 0 0 0; font-size: 0.85rem">একসাথে চেইন লোড করার জন্য একাধিক প্লাগইন নির্বাচন করার জন্য।</p>
                </div>
                <div style="padding: 1rem; border-radius: 8px; border: 1px solid var(--line); background-color: var(--surface)">
                  <code style="color: var(--accent); font-weight: bold">Cmd / Ctrl + ক্লিক</code>
                  <p style="margin: 0.25rem 0 0 0; font-size: 0.85rem">আলাদা আলাদা প্লাগইন একসাথে নির্বাচন করার জন্য।</p>
                </div>
              </div>
            </div>`
        }
      ]
    },
    ru: {
      title: "Вики и документация по Virtue FX Manager",
      subtitle: "Узнайте, как визуально организовывать, фильтровать и мгновенно загружать плагины из вашей библиотеки в REAPER.",
      langSelectLabel: "Выберите язык",
      tableOfContents: "Содержание",
      searchPlaceholder: "Поиск по справке...",
      breadcrumbsHome: "Справка",
      categories: {
        setup: "Установка и настройка",
        workflows: "Основные рабочие процессы",
        organization: "Организация библиотеки",
        shortcuts: "Горячие клавиши"
      },
      sections: [
        {
          id: "getting-started",
          title: "1. Начало работы и настройка сканирования",
          content: `<div>
              <p>При первом запуске Virtue FX Manager в REAPER приложение считывает существующий кэш плагинов REAPER для составления списка. Чтобы поддерживать список в актуальном состоянии:</p>
              <ul>
                <li><strong>Автоматическая синхронизация:</strong> Virtue автоматически обнаруживает новые просканированные плагины. Если плагин отсутствует, запустите сканирование в REAPER (<em>Options &gt; Preferences &gt; Plug-ins &gt; VST &gt; Re-scan</em>).</li>
                <li><strong>Директории сканирования:</strong> В панели настроек (значок шестеренки) убедитесь, что пути к папкам с плагинами соответствуют местам их реальной установки.</li>
                <li><strong>Настройка языка:</strong> Выберите предпочитаемый язык интерфейса. Приложение динамически переведет все меню, строки состояния и подсказки.</li>
              </ul>
            <div style="margin-top: 1.5rem; padding: 1rem; border-radius: var(--radius); border: 1px solid var(--accent-line); background-color: var(--accent-soft); color: var(--ink);">
                <strong style="color: var(--accent-strong); display: block; margin-bottom: 0.5rem;">🚀 Рабочий процесс быстрого запуска (Как продолжить):</strong>
                <ol style="margin: 0; padding-left: 1.25rem; font-size: 0.95rem; line-height: 1.6;">
                  <li><strong>Первоначальная настройка:</strong> Запустите VfxM в REAPER, проверьте выбор языка и подтвердите пути к плагинам в Настройках.</li>
                  <li><strong>Сканирование библиотеки:</strong> Перейдите в Настройки (значок шестеренки), нажмите <strong>Создать миниатюры</strong>, выберите <strong>Сканировать отсутствующие</strong> и позвольте автосканеру построить вашу визуальную библиотеку. Перезапустите REAPER и возобновите сканирование в случае сбоя.</li>
                  <li><strong>Ручной захват:</strong> Для плагинов из черного списка или автономных плагинов откройте окно плагина в REAPER, наведите на него курсор в VfxM и нажмите <strong>значок камеры</strong>, чтобы сделать скриншот вручную.</li>
                  <li><strong>Наведение порядка:</strong> Щелкните правой кнопкой мыши и выберите <strong>Скрыть / Удалить из списка</strong> для изоляции пробных версий или служебных плагинов, которые вам не нужны.</li>
                  <li><strong>Создание панелей:</strong> Нажмите на значок вкладки <strong>+</strong> для создания новой панели (например, «Вокал»), перетащите туда любимые плагины и отсортируйте их по оценкам.</li>
                  <li><strong>Вставка и сведение:</strong> Дважды щелкните любую карточку или перетащите ее прямо на дорожки для мгновенной загрузки.</li>
                </ol>
              </div>
            </div>`
        },
        {
          id: "visual-thumbnails",
          title: "2. Система визуальных миниатюр и захват экрана",
          content: `<div>
              <p>Virtue FX Manager разработан на основе визуального рабочего процесса. Вы можете искать плагины по их реальному графическому интерфейсу, а не по безликим текстовым строкам:</p>
              <ul>
                <li><strong>Сетка против Списка:</strong> переключайтесь между графическим отображением в виде карточек плагинов и списком характеристик с помощью кнопок переключения в верхней части браузера.</li>
                <li><strong>Встроенный захват камеры:</strong> откройте интерфейс нужного плагина в REAPER, наведите курсор на запись плагина в Virtue и нажмите <strong>значок камеры</strong>, чтобы мгновенно сделать скриншот, обрезать его и сохранить. Горячие клавиши буфера обмена (<kbd>Cmd/Ctrl + C/V</kbd>) и отмены/повтора действий (<kbd>Cmd/Ctrl + Z / Shift+Z</kbd>) поддерживаются в полном объеме.</li>
                <li><strong>Автоматический сканер миниатюр:</strong> используйте встроенную утилиту пакетного сканирования (доступную через значок настроек-шестеренку), чтобы автоматически создать всю визуальную библиотеку за считанные минуты. Она работает в фоновом режиме, последовательно загружая каждый плагин на временную дорожку, захватывая его графический интерфейс и сохраняя в сетку.</li>
                <li><strong>Защита от сбоев DAW и черный список:</strong> чтобы предотвратить циклы критических ошибок при сканировании нестабильных плагинов, VfxM проверяет доступность внешних путей, игнорирует скрытые плагины и автоматически добавляет проблемные плагины в файл <code class="code-token">vt_scan_blocklist.txt</code>, пропуская их при последующих запусках.</li>
                <li><strong>Настраиваемая задержка захвата:</strong> плагинам с тяжелой графикой или рендерингом на GPU может потребоваться дополнительное время для полной отрисовки интерфейса. Настройте задержку захвата (в кадрах) на панели настроек для получения четких миниатюр без визуального шума.</li>
                <li><strong>Иллюстрации по умолчанию:</strong> для популярных категорий плагинов включен набор стандартных изображений, чтобы ваша библиотека выглядела отлично с первого дня работы.</li>
              </ul>
              <div style="margin-top: 1.5rem; padding: 1rem; border-radius: var(--radius); border: 1px solid rgba(220, 62, 54, 0.25); background-color: rgba(220, 62, 54, 0.05); color: var(--ink);">
                <strong style="color: #dc3e36; display: block; margin-bottom: 0.5rem;">⚠️ Стабильность хоста и восстановление после сбоев:</strong>
                Пакетное сканирование загружает и инициализирует каждый плагин в вашей библиотеке. Некоторые сторонние плагины (особенно с оболочками совместимости или проблемами инициализации защиты от копирования) могут привести к сбою REAPER. Если произошел сбой:
                <ol style="margin-top: 0.5rem; margin-bottom: 0; padding-left: 1.25rem;">
                  <li>Просто перезапустите REAPER. Система восстановления VfxM при запуске автоматически добавит проблемный плагин в черный список в файле <code>vt_scan_blocklist.txt</code>.</li>
                  <li>Откройте VfxM и запустите сканирование снова. Программа автоматически пропустит аварийный плагин и безопасно продолжит сканирование остальной части вашей библиотеки.</li>
                  <li><strong>Как разблокировать:</strong> Если вы хотите разблокировать плагин, откройте <code>vt_scan_blocklist.txt</code> (расположенный в папке ресурсов REAPER) в текстовом редакторе, удалите строку, соответствующую вашему плагину, и сохраните файл.</li>
                </ol>
                <p style="margin-top: 0.5rem; font-size: 0.9rem;"><em>Примечание:</em> Если в вашей библиотеке несколько нестабильных плагинов, вам, возможно, придется запускать процесс сканирования несколько раз, перезапуская REAPER после каждого сбоя, пока все проблемные плагины не будут внесены в черный список и вся библиотека не будет обработана. Кроме того, вам может потребоваться запустить сканирование несколько раз и сгенерировать миниатюры несколько раз или вручную сделать снимки для некоторых плагинов, чтобы гарантировать успешный захват всех элементов.</p>
              </div>
              <div style="margin-top: 1rem; padding: 1rem; border-radius: var(--radius); border: 1px solid var(--accent-line); background-color: var(--accent-soft); color: var(--ink);">
                <strong style="color: var(--accent-strong); display: block; margin-bottom: 0.5rem;">💾 Требования к хранилищу:</strong>
                Генерация визуальных миниатюр для больших библиотек требует свободного места на локальном диске (каждый обрезанный скриншот занимает около 20–80 КБ). Перед началом сканирования всей библиотеки убедитесь, что на системном диске достаточно свободного места.
              </div>
            </div>`
        },
        {
          id: "track-insertion",
          title: "3. Вставка на трек (перетаскивание и двойной клик)",
          content: `<div>
              <p>Загружайте процессоры в ваши миксы без необходимости копаться в сложных контекстных меню:</p>
              <ul>
                <li><strong>Двойной клик:</strong> Двойной клик на плагине в сетке или списке мгновенно загружает его на активный трек в REAPER.</li>
                <li><strong>Перетаскивание (Drag & Drop):</strong> Перетащите карточку плагина из окна Virtue на панель трека (TCP), линейку микшера или пустое место аранжировщика (при этом автоматически создастся новый трек).</li>
                <li><strong>Пакетная вставка:</strong> Выберите несколько плагинов с помощью **Ctrl+клик** или **Cmd+клик** (Mac), а затем перетащите их или дважды кликните, чтобы загрузить всю цепочку по порядку.</li>
              </ul>
            </div>`
        },
        {
          id: "status-circles",
          title: "4. Круги состояния плагина (Активный и Скрытый)",
          content: `<div>
              <p>Очистите ваш список, скрыв системные утилиты или дубликаты с помощью брандмауэра списков:</p>
              <div style="display: flex; gap: 1.5rem; margin: 1rem 0; flex-wrap: wrap">
                <div style="flex: 1 1 200px; padding: 1rem; border-radius: 8px; border: 1px solid var(--line); background-color: rgba(46, 204, 113, 0.08)">
                  <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem">
                    <span style="display: inline-block; width: 10px; height: 10px; border-radius: 50%; background-color: #2ecc71"></span>
                    <strong>Зеленый (Listed / Активный):</strong>
                  </div>
                  <p style="margin: 0; font-size: 0.9rem">Виден в браузере и поиске. Плагин активен и доступен для загрузки.</p>
                </div>
                <div style="flex: 1 1 200px; padding: 1rem; border-radius: 8px; border: 1px solid var(--line); background-color: rgba(220, 62, 54, 0.08)">
                  <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem">
                    <span style="display: inline-block; width: 10px; height: 10px; border-radius: 50%; background-color: #dc3e36"></span>
                    <strong>Красный (Скрытый / Unlisted):</strong>
                  </div>
                  <p style="margin: 0; font-size: 0.9rem">Скрыт из общего списка, чтобы не загромождать интерфейс. Нажмите правой кнопкой мыши и выберите "Force Reactivate", чтобы восстановить.</p>
                </div>
              </div>
            </div>`
        },
        {
          id: "color-codes",
          title: "5. Цветовая кодировка по категориям",
          content: `<div>
              <p>Virtue сопоставляет цвета с типами аудиопроцессоров и форматов. При включении опции "Окрашивать список по категориям" в меню настроек (значок шестерёнки) названия плагинов в режиме списка динамически отображаются соответствующим цветом:</p>
              <div style="overflow-x: auto">
                <table style="width: 100%; border-collapse: collapse; margin-top: 1rem; font-size: 0.9rem">
                  <thead>
                    <tr style="border-bottom: 2px solid var(--line); text-align: left">
                      <th style="padding: 0.75rem">Цвет</th>
                      <th style="padding: 0.75rem">Категория аудио</th>
                      <th style="padding: 0.75rem">Ключевые слова / Пример</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style="border-bottom: 1px solid var(--line)">
                      <td style="padding: 0.75rem; display: flex; align-items: center; gap: 0.5rem">
                        <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background-color: #33b8ff"></span> Синий
                      </td>
                      <td style="padding: 0.75rem"><strong>Эквалайзеры & Фильтры</strong></td>
                      <td style="padding: 0.75rem">EQ, Equalizer, Filter, динамические эквалайзеры</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--line)">
                      <td style="padding: 0.75rem; display: flex; align-items: center; gap: 0.5rem">
                        <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background-color: #ff9433"></span> Оранжевый
                      </td>
                      <td style="padding: 0.75rem"><strong>Динамика & Компрессоры</strong></td>
                      <td style="padding: 0.75rem">Compressor, Limiter, Gate, Expander, Transient Shaper</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--line)">
                      <td style="padding: 0.75rem; display: flex; align-items: center; gap: 0.5rem">
                        <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background-color: #b27aff"></span> Фиолетовый
                      </td>
                      <td style="padding: 0.75rem"><strong>Реверберация & Пространство</strong></td>
                      <td style="padding: 0.75rem">Reverb, Space, Room, Plate, Hall, сверточная реверберация</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--line)">
                      <td style="padding: 0.75rem; display: flex; align-items: center; gap: 0.5rem">
                        <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background-color: #2edbd1"></span> Бирюзовый
                      </td>
                      <td style="padding: 0.75rem"><strong>Дилэй & Эхо</strong></td>
                      <td style="padding: 0.75rem">Delay, Echo, ленточный дилэй</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--line)">
                      <td style="padding: 0.75rem; display: flex; align-items: center; gap: 0.5rem">
                        <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background-color: #56e673"></span> Зеленый
                      </td>
                      <td style="padding: 0.75rem"><strong>Модуляция</strong></td>
                      <td style="padding: 0.75rem">Chorus, Flanger, Phaser, хорус, тремоло</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--line)">
                      <td style="padding: 0.75rem; display: flex; align-items: center; gap: 0.5rem">
                        <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background-color: #ff6cbe"></span> Розовый
                      </td>
                      <td style="padding: 0.75rem"><strong>Инструменты & Синтезаторы</strong></td>
                      <td style="padding: 0.75rem">Synth, Sampler, VSTi, виртуальные синтезаторы, пианино, ударные</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--line)">
                      <td style="padding: 0.75rem; display: flex; align-items: center; gap: 0.5rem">
                        <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background-color: #ff473d"></span> Красный
                      </td>
                      <td style="padding: 0.75rem"><strong>Дисторшн & Сатурация</strong></td>
                      <td style="padding: 0.75rem">Distortion, Saturation, Amp, эмуляторы кабинетов, овердрайв</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--line)">
                      <td style="padding: 0.75rem; display: flex; align-items: center; gap: 0.5rem">
                        <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background-color: #b7bcca"></span> Серый
                      </td>
                      <td style="padding: 0.75rem"><strong>Утилиты & Анализаторы</strong></td>
                      <td style="padding: 0.75rem">Utility, Meter, Analyzer, осциллограф, спектроанализатор</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--line)">
                      <td style="padding: 0.75rem; display: flex; align-items: center; gap: 0.5rem">
                        <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background-color: #ffd63d"></span> Желтый
                      </td>
                      <td style="padding: 0.75rem"><strong>MIDI-процессоры</strong></td>
                      <td style="padding: 0.75rem">MIDI Chorder, арпеджиатор, утилиты маршрутизации</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="color-list-demo-placeholder"></div>
            </div>`
        },
        {
          id: "favorites-organization",
          title: "6. Вкладки Избранного и организация",
          content: `<div>
              <p>Группируйте ваши рабочие инструменты и пресеты в удобные пользовательские вкладки:</p>
              <ul>
                <li><strong>Управление вкладками:</strong> Кликните правой кнопкой мыши по панели вкладок избранного, чтобы добавить новую. Вы можете переименовать её двойным кликом или переместить горизонтально.</li>
                <li><strong>Добавление в Избранное:</strong> Выберите плагин и нажмите на кнопку "Избранное выбранного" под списком, или кликните правой кнопкой мыши для добавления в текущую вкладку.</li>
                <li><strong>Цепочки эффектов и пресеты:</strong> Сохраняйте треки как FX Chains в REAPER и пиньте их во вкладках Virtue для быстрой загрузки целых цепочек в один клик.</li>
                <li><strong>Пользовательские заметки:</strong> Напишите памятки или советы по маршрутизации для каждого плагина прямо в панели заметок. Они сохраняются глобально во всех ваших проектах.</li>
              </ul>
            </div>`
        },
        {
          id: "keyboard-shortcuts",
          title: "7. Горячие клавиши",
          content: `<div>
              <p>Для быстрой работы управляйте Virtue полностью с клавиатуры компьютера:</p>
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1rem; margin-top: 1rem">
                <div style="padding: 1rem; border-radius: 8px; border: 1px solid var(--line); background-color: var(--surface)">
                  <code style="color: var(--accent); font-weight: bold">Стрелки (Вверх / Вниз)</code>
                  <p style="margin: 0.25rem 0 0 0; font-size: 0.85rem">Навигация по списку плагинов в активном браузере.</p>
                </div>
                <div style="padding: 1rem; border-radius: 8px; border: 1px solid var(--line); background-color: var(--surface)">
                  <code style="color: var(--accent); font-weight: bold">Enter / Return</code>
                  <p style="margin: 0.25rem 0 0 0; font-size: 0.85rem">Загружает выбранный плагин на активный трек REAPER.</p>
                </div>
                <div style="padding: 1rem; border-radius: 8px; border: 1px solid var(--line); background-color: var(--surface)">
                  <code style="color: var(--accent); font-weight: bold">Esc (Escape)</code>
                  <p style="margin: 0.25rem 0 0 0; font-size: 0.85rem">Закрывает настройки, всплывающие окна или главное окно.</p>
                </div>
                <div style="padding: 1rem; border-radius: 8px; border: 1px solid var(--line); background-color: var(--surface)">
                  <code style="color: var(--accent); font-weight: bold">Клавиша F</code>
                  <p style="margin: 0.25rem 0 0 0; font-size: 0.85rem">Возвращает фокус ввода клавиатуры к поиску или списку плагинов.</p>
                </div>
                <div style="padding: 1rem; border-radius: 8px; border: 1px solid var(--line); background-color: var(--surface)">
                  <code style="color: var(--accent); font-weight: bold">Shift + клик</code>
                  <p style="margin: 0.25rem 0 0 0; font-size: 0.85rem">Выделяет диапазон плагинов для совместной пакетной вставки.</p>
                </div>
                <div style="padding: 1rem; border-radius: 8px; border: 1px solid var(--line); background-color: var(--surface)">
                  <code style="color: var(--accent); font-weight: bold">Cmd / Ctrl + клик</code>
                  <p style="margin: 0.25rem 0 0 0; font-size: 0.85rem">Выделяет несколько разрозненных плагинов.</p>
                </div>
              </div>
            </div>`
        }
      ]
    },
    ur: {
      title: "Virtue FX Manager وکی اور دستاویزات",
      subtitle: "سیکھیں کہ کس طرح REAPER کے اندر اپنی وسیع پلگ ان لائبریری کو بصری طور پر ترتیب دیں، فلٹر کریں اور فوری طور پر لوڈ کریں۔",
      langSelectLabel: "زبان منتخب کریں",
      tableOfContents: "فہرست عنوانات",
      searchPlaceholder: "مدد تلاش کریں...",
      breadcrumbsHome: "مدد",
      categories: {
        setup: "سیٹ اپ اور کنفیگریشن",
        workflows: "بنیادی ورک فلو",
        organization: "لائبریری تنظیم",
        shortcuts: "کیبورڈ شارٹ کٹس"
      },
      sections: [
        {
          id: "getting-started",
          title: "1. شروعات اور اسکین سیٹ اپ",
          content: `<div>
              <p>جب آپ پہلی بار REAPER میں Virtue FX Manager کھولتے ہیں، تو یہ آپ کی فہرست بنانے کے لیے REAPER کی کیشے فائل پڑھتا ہے۔ سب کچھ اپ ٹو ڈیٹ رکھنے کے لیے:</p>
              <ul>
                <li><strong>خودکار کیشے مطابقت پذیری (Sync):</strong> Virtue نئے اسکین شدہ پلگ انز کا خود بخود پتہ لگاتا ہے۔ اگر کوئی پلگ ان غائب ہے، تو REAPER میں فزیکل اسکین چلائیں (<em>Options &gt; Preferences &gt; Plug-ins &gt; VST &gt; Re-scan</em>)۔</li>
                <li><strong>اسکین فولڈرز:</strong> ترتیبات پینل (گیئر آئیکن) میں، یقینی بنائیں کہ آپ کے سسٹم کے پلگ ان فولڈر پاتھ آپ کے اصل پلگ ان انسٹالیشن فولڈرز سے میل کھاتے ہیں۔</li>
                <li><strong>زبان کی ترتیبات:</strong> اپنی پسندیدہ زبان منتخب کریں۔ ایپ خود بخود مینو، اسٹیٹس بار اور ٹول ٹپس کو تبدیل کر دے گی۔</li>
              </ul>
            <div style="margin-top: 1.5rem; padding: 1rem; border-radius: var(--radius); border: 1px solid var(--accent-line); background-color: var(--accent-soft); color: var(--ink);">
                <strong style="color: var(--accent-strong); display: block; margin-bottom: 0.5rem;">🚀 فوری آغاز کا طریقہ کار (طریقہ کار):</strong>
                <ol style="margin: 0; padding-left: 1.25rem; font-size: 0.95rem; line-height: 1.6;">
                  <li><strong>ابتدائی ترتیب:</strong> REAPER میں VfxM چلائیں، منتخب کردہ زبان کی تصدیق کریں، اور سیٹنگز میں پلگ انز کے راستوں کی تصدیق کریں۔</li>
                  <li><strong>لائبریری اسکین کریں:</strong> سیٹنگز (گیئر آئیکن) پر جائیں، <strong>تھمب نیلز بنائیں</strong> پر کلک کریں، <strong>تمام غائب اسکین کریں</strong> کا انتخاب کریں، اور آٹو اسکینر کو اپنی بصری لائبریری بنانے دیں۔ کسی بھی کریش کی صورت میں REAPER کو دوبارہ شروع کریں اور اسکین دوبارہ شروع کریں۔</li>
                  <li><strong>دستی کیپچر:</strong> کسی بھی بلاک لسٹ شدہ یا آف لائن پلگ ان کے لیے، REAPER میں پلگ ان کی فلوٹنگ ونڈو کھولیں، VfxM میں اس پر ماؤس لائیں، اور اسکرین کو دستی طور پر کیپچر کرنے के لیے <strong>کیمرہ آئیکن</strong> پر کلک کریں۔</li>
                  <li><strong>غیر ضروری پلگ انز چھپائیں:</strong> جن ٹرائل ورژنز یا یوٹیلیٹی پلگ انز کی آپ کو ضرورت نہیں ہے انہیں علیحدہ کرنے کے لیے رائٹ کلک کریں اور <strong>چھپائیں / فہرست سے ہٹائیں</strong> کا انتخاب کریں۔</li>
                  <li><strong>بورڈز بنائیں:</strong> نیا بورڈ (مثلاً "وکلز") بنانے کے لیے <strong>+</strong> ٹیب آئیکن پر کلک کریں، اپنے پسندیدہ پلگ انز کو اس میں ڈریگ کریں، اور درجہ بندی کے ذریعے ان کی ترتیب درست کریں۔</li>
                  <li><strong>لوڈ کریں اور مکس کریں:</strong> پلگ ان کو فوری لوڈ کرنے کے لیے کسی भी کارڈ پر ڈبل کلک کریں یا اسے براہ راست اپنے ٹریکس پر ڈریگ کریں۔</li>
                </ol>
              </div>
            </div>`
        },
        {
          id: "visual-thumbnails",
          title: "2. بصری تھمب نیل سسٹم اور کیمرہ افادیت",
          content: `<div>
              <p>Virtue FX Manager ایک بصری بہاؤ کے گرد بنایا گیا ہے۔ آپ عام ٹیکسٹ لائنوں کے بجائے پلگ انز کو ان کے اصل یوزر انٹرس کے ذریعے براؤز کر سکتے ہیں:</p>
              <ul>
                <li><strong>گرڈ ویو بمقابلہ لسٹ ویو:</strong> براؤزر کے اوپر موجود لے آؤٹ سوئچر بٹنز کا استعمال کرتے ہوئے گرافیکل کارڈ لے آؤٹ اور میٹا ڈیٹا اسپرڈ شیٹ لسٹ ویو کے درمیان سوئچ کریں۔</li>
                <li><strong>بلٹ ان کیمرہ کیپچر:</strong> REAPER میں ٹارگٹ پلگ ان کا انٹرفیس کھولیں، Virtue میں پلگ ان پر ماؤس لائیں، اور ایک کسٹم اسکرین شاٹ کو فوری طور پر کیپچر، क्रॉप اور اسٹور کرنے کے لیے <strong>کیمرہ آئیکن</strong> پر کلک کریں۔ کلپ بورڈ کمانڈز (<kbd>Cmd/Ctrl + C/V</kbd>) اور انڈو/ریڈو (<kbd>Cmd/Ctrl + Z / Shift+Z</kbd>) کی مکمل سپورٹ موجود ہے۔</li>
                <li><strong>آٹو تھمب نیل اسکینر:</strong> منٹوں میں اپنی پوری بصری لائبریری خود بخود بنانے کے لیے بلٹ ان بیچ اسکین یوٹیلیٹی (گیئر سیٹنگز آئیکن کے ذریعے دستیاب) کا استعمال کریں۔ یہ پس منظر میں چلتی ہے، ہر پلگ ان کو ترتیب وار ایک عارضی ٹریک پر لوڈ کرتی ہے، اس کے گرافیکل انٹرفیس کو کیپچر کرتی ہے، اور اسے آپ کے گرڈ میں محفوظ کرتی ہے۔</li>
                <li><strong>DAW کریش سے بچاؤ اور بلاک لسٹ:</strong> اسکیننگ کے دوران غیر مستحکم پلگ انز کی وجہ سے کریش لوپ سے بچنے کے لیے، VfxM چیک کرتا ہے کہ بیرونی راستے آن لائن ہیں یا نہیں، غیر فہرست شدہ/پوشیدہ پلگ انز کو نظر انداز کرتا ہے، اور خود بخود کسی بھی کریش ہونے والے پلگ ان کو <code class="code-token">vt_scan_blocklist.txt</code> میں بلاک لسٹ کر دیتا ہے، جس سے وہ اگلے اسکینز میں نظر انداز ہو جاتے ہیں۔</li>
                <li><strong>ترتیب دینے کے قابل کیپچر تاخیر:</strong> ہیوی گرافکس یا GPU پر مبنی پلگ انز کو مکمل طور پر ظاہر ہونے کے لیے کچھ اضافی وقت درکار ہو سکتا ہے۔ صاف اور شور سے پاک تھمب نیلز کو یقینی بنانے کے لیے سیٹنگز پینل میں کیپچر تاخیر کی ترتیب (فریموں میں) کو ایڈجسٹ کریں۔</li>
                <li><strong>پہلے سے طے شدہ عکاسی:</strong> عام پلگ ان کیٹیگریز کے لیے پہلے سے طے شدہ عکاسیوں کا ایک سیٹ شامل ہے تاکہ آپ کی لائبریری پہلے دن سے ہی بہترین نظر آئے۔</li>
              </ul>
              <div style="margin-top: 1.5rem; padding: 1rem; border-radius: var(--radius); border: 1px solid rgba(220, 62, 54, 0.25); background-color: rgba(220, 62, 54, 0.05); color: var(--ink);">
                <strong style="color: #dc3e36; display: block; margin-bottom: 0.5rem;">⚠️ ہوسٹ کا استحکام اور کریش سے بحالی:</strong>
                بیچ اسکیننگ آپ کی لائبریری میں موجود ہر پلگ ان کو لوڈ اور انسٹینشیٹ کرتی ہے۔ کچھ تھرڈ پارٹی پلگ انز (خاص طور پر وہ جن میں مطابقت کے ریپرز یا کاپی پروٹیکشن کے مسائل ہوں) REAPER کو کریش کر سکتے ہیں۔ اگر کریش ہو جائے:
                <ol style="margin-top: 0.5rem; margin-bottom: 0; padding-left: 1.25rem;">
                  <li>بس REAPER کو دوبارہ شروع کریں۔ VfxM کی اسٹارٹ اپ ریکوری کریش ہونے والے پلگ ان کو <code>vt_scan_blocklist.txt</code> میں شامل کر کے خود بخود بلاک لسٹ کر دے گی۔</li>
                  <li>VfxM کھولیں اور اسکین دوبارہ شروع کریں۔ یہ خود بخود کریش ہونے والے پلگ ان کو نظر انداز کر دے گا اور آپ کی باقی لائبریری کو محفوظ طریقے سے اسکین کرنا جاری رکھے گا۔</li>
                  <li><strong>ان بلاک کیسے کریں:</strong> اگر آپ کسی پلگ ان کو ان بلاک کرنا چاہتے ہیں تو، ٹیکسٹ ایڈیٹر میں <code>vt_scan_blocklist.txt</code> (اپنے REAPER وسائل کی ڈائرکٹری میں واقع) کھولیں، اپنے پلگ ان سے متعلقہ لائن کو ڈیلیٹ کریں اور فائل کو محفوظ کریں۔</li>
                </ol>
                <p style="margin-top: 0.5rem; font-size: 0.9rem;"><em>نوٹ:</em> اگر آپ کی لائبریری میں متعدد غیر مستحکم پلگ انز ہیں، تو آپ کو اسکین کا عمل متعدد بار چلانا پڑ سکتا ہے، ہر کریش کے بعد REAPER کو دوبارہ شروع کرنا ہوگا، جب تک کہ تمام مسئلہ دار پلگ انز بلاک لسٹ نہ ہو جائیں اور پوری لائبریری اسکین نہ ہو جائے۔ مزید برآں، یہ یقینی بنانے کے لیے کہ تمام پلگ انز کامیابی کے ساتھ کیپچر ہو گئے ہیں، آپ کو متعدد بار اسکین چلانے اور متعدد بار تھمب نیلز بنانے، یا کچھ تھمب نیلز کو دستی طور پر کیپچر کرنے کی ضرورت پڑ سکتی ہے۔</p>
              </div>
              <div style="margin-top: 1rem; padding: 1rem; border-radius: var(--radius); border: 1px solid var(--accent-line); background-color: var(--accent-soft); color: var(--ink);">
                <strong style="color: var(--accent-strong); display: block; margin-bottom: 0.5rem;">💾 اسٹوریج کی ضروریات:</strong>
                بڑی لائبریریوں کے لیے بصری تھمب نیلز بنانے کے لیے مقامی ڈسک کی جگہ درکار ہوتی ہے (ہر کروپ شدہ اسکرین شاٹ تقریباً 20KB سے 80KB جگہ لیتا ہے)۔ اپنی پوری لائبریری کو اسکین کرنے سے پہلے یقینی بنائیں کہ آپ کے سسٹم ڈرائیو پر کافی جگہ خالی ہے۔
              </div>
            </div>`
        },
        {
          id: "track-insertion",
          title: "3. ٹریک پر ڈالنا (ڈریگ اینڈ ڈراپ اور ڈبل کلک)",
          content: `<div>
              <p>بغیر کسی پیچیدہ رائٹ-کلک مینو کے پلگ انز کو اپنے ٹریکس پر لوڈ کریں:</p>
              <ul>
                <li><strong>ڈبل کلک:</strong> براؤزر یا لسٹ ویو میں کسی بھی پلگ ان پر ڈبل کلک کرنے سے وہ فوری طور پر REAPER کے منتخب کردہ ٹریک پر لوڈ ہو جاتا ہے۔</li>
                <li><strong>ڈریگ اینڈ ڈراپ:</strong> پلگ ان کارڈ کو براہ راست Virtue ونڈو سے کھینچیں اور ٹریک کنٹرول پینل، مکسر چینل یا ٹائم لائن کی خالی جگہ پر چھوڑیں (خالی جگہ پر چھوڑنے سے نیا ٹریک بن جائے گا)۔</li>
                <li><strong>بیچ لوڈ:</strong> **Ctrl+کلک** یا **Cmd+کلک** (Mac) کا استعمال کرتے ہوئے کئی پلگ انز منتخب کریں، پھر انہیں ایک ساتھ ٹریک پر لوڈ کرنے کے لیے کھینچیں یا ڈبل کلک کریں۔</li>
              </ul>
            </div>`
        },
        {
          id: "status-circles",
          title: "4. پلگ ان اسٹیٹس سرکل (Listed بمقابلہ Unlisted)",
          content: `<div>
              <p>فائر وال سسٹم کا استعمال کرتے ہوئے ان پلگ انز کو چھپائیں جن کی آپ کو ضرورت نہیں ہے:</p>
              <div style="display: flex; gap: 1.5rem; margin: 1rem 0; flex-wrap: wrap">
                <div style="flex: 1 1 200px; padding: 1rem; border-radius: 8px; border: 1px solid var(--line); background-color: rgba(46, 204, 113, 0.08)">
                  <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem">
                    <span style="display: inline-block; width: 10px; height: 10px; border-radius: 50%; background-color: #2ecc71"></span>
                    <strong>سبز (Listed / فعال):</strong>
                  </div>
                  <p style="margin: 0; font-size: 0.9rem">براؤزر کی فہرست میں دکھائی دیتا ہے۔ اس کا مطلب ہے کہ پلگ ان فعال ہے اور لوڈ کرنے کے لیے دستیاب ہے۔</p>
                </div>
                <div style="flex: 1 1 200px; padding: 1rem; border-radius: 8px; border: 1px solid var(--line); background-color: rgba(220, 62, 54, 0.08)">
                  <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem">
                    <span style="display: inline-block; width: 10px; height: 10px; border-radius: 50%; background-color: #dc3e36"></span>
                    <strong>سرخ (چھپا ہوا / Unlisted):</strong>
                  </div>
                  <p style="margin: 0; font-size: 0.9rem">براؤزنگ سے چھپا ہوا تاکہ فلو متاثر نہ ہو۔ اسے واپس لانے کے لیے رائٹ-کلک کریں اور "Force Reactivate" منتخب کریں۔</p>
                </div>
              </div>
            </div>`
        },
        {
          id: "color-codes",
          title: "5. ریٹنگ اور کیٹیگریز رنگ کوڈز",
          content: `<div>
              <p>Virtue آڈیو کیٹیگریز اور پلگ ان فارمیٹس کی بنیاد پر رنگ تفویض کرتا ہے۔ ترتیبات کے مینو (گیئر آئیکن) میں "کیٹیگری کے مطابق رنگین فہرست" کا آپشن فعال کرنے سے فہرست کے منظر میں پلگ ان نام رنگین دکھائی دیں گے:</p>
              <div style="overflow-x: auto">
                <table style="width: 100%; border-collapse: collapse; margin-top: 1rem; font-size: 0.9rem">
                  <thead>
                    <tr style="border-bottom: 2px solid var(--line); text-align: left">
                      <th style="padding: 0.75rem">رنگ</th>
                      <th style="padding: 0.75rem">آڈیو کیٹیگری</th>
                      <th style="padding: 0.75rem">مثالیں اور مماثلت</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style="border-bottom: 1px solid var(--line)">
                      <td style="padding: 0.75rem; display: flex; align-items: center; gap: 0.5rem">
                        <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background-color: #33b8ff"></span> نیلا
                      </td>
                      <td style="padding: 0.75rem"><strong>EQ اور فلٹر</strong></td>
                      <td style="padding: 0.75rem">EQ, Equalizer, Filter, ڈائنامک EQ</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--line)">
                      <td style="padding: 0.75rem; display: flex; align-items: center; gap: 0.5rem">
                        <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background-color: #ff9433"></span> نارنجی
                      </td>
                      <td style="padding: 0.75rem"><strong>ڈائنامکس اور کمپریسر</strong></td>
                      <td style="padding: 0.75rem">Compressor, Limiter, Noise Gate, ایکسپینڈر</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--line)">
                      <td style="padding: 0.75rem; display: flex; align-items: center; gap: 0.5rem">
                        <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background-color: #b27aff"></span> جامنی
                      </td>
                      <td style="padding: 0.75rem"><strong>رِیوَرب اور اسپیس</strong></td>
                      <td style="padding: 0.75rem">Reverb, Space, Room, پلیٹ ریوَرب</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--line)">
                      <td style="padding: 0.75rem; display: flex; align-items: center; gap: 0.5rem">
                        <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background-color: #2edbd1"></span> فیروزی
                      </td>
                      <td style="padding: 0.75rem"><strong>ڈِیلے اور ایکو</strong></td>
                      <td style="padding: 0.75rem">Delay, Echo, ٹیپ ڈِیلے</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--line)">
                      <td style="padding: 0.75rem; display: flex; align-items: center; gap: 0.5rem">
                        <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background-color: #56e673"></span> ہرا
                      </td>
                      <td style="padding: 0.75rem"><strong>مودیولیشن</strong></td>
                      <td style="padding: 0.75rem">Chorus, Flanger, Phaser, ٹریمولو، کورس</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--line)">
                      <td style="padding: 0.75rem; display: flex; align-items: center; gap: 0.5rem">
                        <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background-color: #ff6cbe"></span> گلابی
                      </td>
                      <td style="padding: 0.75rem"><strong>آلات اور سنتھیسائزر</strong></td>
                      <td style="padding: 0.75rem">Synth, Sampler, VSTi, سنتھیسائزر، پیا نو، ڈرمز</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--line)">
                      <td style="padding: 0.75rem; display: flex; align-items: center; gap: 0.5rem">
                        <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background-color: #ff473d"></span> سرخ
                      </td>
                      <td style="padding: 0.75rem"><strong>ڈسٹورشن اور سیچوریشن</strong></td>
                      <td style="padding: 0.75rem">Distortion, Saturation, Amp, ایمپ سیمولیٹر</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--line)">
                      <td style="padding: 0.75rem; display: flex; align-items: center; gap: 0.5rem">
                        <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background-color: #b7bcca"></span> سرمئی
                      </td>
                      <td style="padding: 0.75rem"><strong>یوٹلٹی اور میٹرز</strong></td>
                      <td style="padding: 0.75rem">Utility, Meter, Analyzer, اسکوپ</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--line)">
                      <td style="padding: 0.75rem; display: flex; align-items: center; gap: 0.5rem">
                        <span style="display: inline-block; width: 12px; height: 12px; border-radius: 50%; background-color: #ffd63d"></span> پیلا
                      </td>
                      <td style="padding: 0.75rem"><strong>MIDI پروسیسر</strong></td>
                      <td style="padding: 0.75rem">MIDI Chorder, ارپیجیٹر، روٹنگ ٹولز</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="color-list-demo-placeholder"></div>
            </div>`
        },
        {
          id: "favorites-organization",
          title: "6. پسندیدہ ٹیبز اور کسٹم فہرستیں",
          content: `<div>
              <p>اپنے اہم پلگ انز اور ایف ایکس چینز کو کسٹم پسندیدہ ٹیبز میں منظم کریں:</p>
              <ul>
                <li><strong>ٹیبز بنانا:</strong> نیا ٹیب بنانے کے لیے پسندیدہ ٹیب ہیڈرز پر رائٹ-کلک کریں۔ نام تبدیل کرنے کے لیے ڈبل-کلک کریں، یا ان کی ترتیب بدلنے کے لیے ٹیب کو کھینچیں۔</li>
                <li><strong>پسندیدہ میں شامل کریں:</strong> براؤزر میں کسی بھی پلگ ان کو منتخب کریں اور "Ado to Favorites" بٹن پر کلک کریں، یا مینیو کے ذریعے شامل کریں۔</li>
                <li><strong>FX چینز اور پری سیٹ:</strong> REAPER میں اپنی ایفیکٹس چینز کو سहेजیں اور فوری لوڈنگ کے لیے انہیں Virtue ٹیبز میں پن کریں۔</li>
                <li><strong>کسٹم نوٹس:</strong> پلگ ان منتخب کر کے نوٹس پینل میں براہ راست مکسنگ ٹپس ٹائپ کریں۔ یہ نوٹس آپ کے تمام پروجیکٹس میں محفوظ رہیں گے۔</li>
              </ul>
            </div>`
        },
        {
          id: "keyboard-shortcuts",
          title: "7. کی بورڈ شارٹ کٹ گائیڈ",
          content: `<div>
              <p>تیز ترین فلو کے لیے اپنے کی بورڈ سے Virtue ایپ کو مکمل طور پر کنٹرول کریں:</p>
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1rem; margin-top: 1rem">
                <div style="padding: 1rem; border-radius: 8px; border: 1px solid var(--line); background-color: var(--surface)">
                  <code style="color: var(--accent); font-weight: bold">تیر والے بٹن (Up / Down)</code>
                  <p style="margin: 0.25rem 0 0 0; font-size: 0.85rem">براؤزر کی فہرست میں پلگ انز کے درمیان اوپر یا نیچے جانے کے لیے۔</p>
                </div>
                <div style="padding: 1rem; border-radius: 8px; border: 1px solid var(--line); background-color: var(--surface)">
                  <code style="color: var(--accent); font-weight: bold">Enter / Return</code>
                  <p style="margin: 0.25rem 0 0 0; font-size: 0.85rem">منتخب پلگ ان کو فعال REAPER ٹریک پر لوڈ کرنے کے لیے۔</p>
                </div>
                <div style="padding: 1rem; border-radius: 8px; border: 1px solid var(--line); background-color: var(--surface)">
                  <code style="color: var(--accent); font-weight: bold">Esc (Escape)</code>
                  <p style="margin: 0.25rem 0 0 0; font-size: 0.85rem">ترتیبات، پاپ اپ یا مین ونڈو بند کرنے کے لیے۔</p>
                </div>
                <div style="padding: 1rem; border-radius: 8px; border: 1px solid var(--line); background-color: var(--surface)">
                  <code style="color: var(--accent); font-weight: bold">F بٹن</code>
                  <p style="margin: 0.25rem 0 0 0; font-size: 0.85rem">کی بورڈ فوکس واپس براؤزر فہرست پر لانے کے لیے۔</p>
                </div>
                <div style="padding: 1rem; border-radius: 8px; border: 1px solid var(--line); background-color: var(--surface)">
                  <code style="color: var(--accent); font-weight: bold">Shift + کلک</code>
                  <p style="margin: 0.25rem 0 0 0; font-size: 0.85rem">ایک ساتھ زنجیر لوڈ کرنے کے لیے متعدد پلگ انز کا انتخاب کرنے کے لیے۔</p>
                </div>
                <div style="padding: 1rem; border-radius: 8px; border: 1px solid var(--line); background-color: var(--surface)">
                  <code style="color: var(--accent); font-weight: bold">Cmd / Ctrl + کلک</code>
                  <p style="margin: 0.25rem 0 0 0; font-size: 0.85rem">مختلف پلگ انز کا ایک ساتھ انتخاب کرنے کے لیے۔</p>
                </div>
              </div>
            </div>`
        }
      ]
    }
  }

window.VirtueDocsData = docData;
