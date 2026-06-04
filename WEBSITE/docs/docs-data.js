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
                <li><strong>Activation:</strong> Click the gear icon inside the app to enter your Lemon Squeezy License Key and activate the full version.</li>
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
            </div>`
        },
        {
          id: "visual-thumbnails",
          title: "2. Visual Thumbnail System & Camera Utility",
          content: `<div>
              <p>Virtue FX Manager is built around a visual flow. You can browse plugins by their actual user interfaces instead of generic text lines:</p>
              <ul>
                <li><strong>Grid View vs List View:</strong> Toggle between the graphical card layout and a metadata spreadsheet list view using the layout switcher buttons at the top of the browser.</li>
                <li><strong>Built-in Camera Capture:</strong> To capture custom thumbnails, open the target plugin interface in REAPER, hover the plugin record in Virtue, and click the **Camera Icon** or press the capture key. Virtue will instantly crop and assign a visual screenshot of that plugin window to your library database.</li>
                <li><strong>Default Illustrations:</strong> A set of default illustrations is included for common plugin categories to keep your library looking pristine from day one.</li>
              </ul>
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
            </div>`
        },
        {
          id: "visual-thumbnails",
          title: "2. 视觉缩略图系统与相机截图工具",
          content: `<div>
              <p>Virtue FX Manager 以直观视觉为主导。您可以通过插件的实际界面进行浏览，而非单调的文本列表：</p>
              <ul>
                <li><strong>网格视图与列表视图：</strong> 使用浏览器顶部的切换按钮，在图形化的卡片布局与详尽的电子表格列表视图之间快速切换。</li>
                <li><strong>内置相机截图：</strong> 打开 REAPER 中任意插件的界面，将鼠标悬停在 Virtue 该插件项上，点击 **相机图标** 或按下截图快捷键，Virtue 将自动剪切该插件窗口的画面并应用至您的缩略图库。</li>
                <li><strong>默认插图：</strong> 我们为常用插件类别配备了精美的默认缩略插图，确保您在第一天使用时便能拥有完美的视觉观感。</li>
              </ul>
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
            </div>`
        },
        {
          id: "visual-thumbnails",
          title: "2. Sistema de Miniaturas Visuais e Utilitário de Câmera",
          content: `<div>
              <p>O Virtue FX Manager foi desenhado em torno de um fluxo de trabalho visual. Esqueça listas de texto simples e identifique seus plugins por suas próprias interfaces gráficas:</p>
              <ul>
                <li><strong>Modo Grade vs Modo Lista:</strong> Alterne entre o layout gráfico com cards e a planilha detalhada com metadados utilizando os botões de alternância no topo do navegador.</li>
                <li><strong>Captura de Tela Integrada (Câmera):</strong> Para gerar imagens personalizadas, abra a interface do plugin no REAPER, passe o mouse sobre a linha do plugin no Virtue e clique no **Ícone de Câmera** ou use o atalho de captura. O Virtue irá cortar perfeitamente a tela da janela do plugin e salvá-la em seu banco de dados local.</li>
                <li><strong>Imagens Padrão:</strong> Para manter seu painel elegante desde o primeiro minuto, o app já traz belas artes genéricas distribuídas por categorias.</li>
              </ul>
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
            </div>`
        },
        {
          id: "visual-thumbnails",
          title: "2. Miniaturas Visuales y Captura de Pantalla Integrada (Cámara)",
          content: `<div>
              <p>Virtue FX Manager se enfoca en un flujo visual. Identifique y navegue sus plugins a través de sus propias interfaces gráficas en lugar de líneas de texto simples:</p>
              <ul>
                <li><strong>Vista de Cuadrícula vs Vista de Lista:</strong> Intercambie entre el diseño de tarjetas gráficas y una hoja detallada de metadados con los botones de alternancia en la parte superior.</li>
                <li><strong>Captura de Cámara Integrada:</strong> Para generar capturas personalizadas, abra el plugin en REAPER, pase el cursor sobre el plugin en la interfaz de Virtue y haga clic en el **Icono de Cámara** o presione el atajo de captura. Virtue recortará perfectamente la ventana del plugin y la guardará en su base de datos.</li>
                <li><strong>Ilustraciones Predeterminadas:</strong> Hemos incluido diseños por defecto clasificados por categorías de audio para mantener su panel estético desde el primer uso.</li>
              </ul>
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
            </div>`
        },
        {
          id: "visual-thumbnails",
          title: "2. Visuelle Miniaturansichten & Kamera-Tool",
          content: `<div>
              <p>Virtue FX Manager setzt auf ein visuelles Konzept. Durchsuchen Sie Plugins anhand ihrer tatsächlichen Benutzeroberfläche anstelle von einfachen Textlisten:</p>
              <ul>
                <li><strong>Raster- vs. Listenansicht:</strong> Wechseln Sie über die Schaltflächen am oberen Rand des Browsers zwischen dem grafischen Kachel-Layout und einer detaillierten Tabellenansicht.</li>
                <li><strong>Integriertes Kamera-Tool:</strong> Um eigene Miniaturansichten zu erstellen, öffnen Sie die Benutzeroberfläche des Plugins in REAPER, bewegen Sie den Mauszeiger im Virtue-Browser über das Plugin und klicken Sie auf das **Kamera-Symbol** oder drücken Sie die Screenshot-Taste. Virtue schneidet das Plugin-Fenster exakt aus und speichert es in Ihrer Bibliothek.</li>
                <li><strong>Standard-Illustrationen:</strong> Für gängige Plugin-Kategorien sind bereits ansprechende Platzhalter-Bilder integriert, damit Ihre Bibliothek von Anfang an ordentlich aussieht.</li>
              </ul>
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
            </div>`
        },
        {
          id: "visual-thumbnails",
          title: "2. Miniatures visuelles et outil de capture d'écran",
          content: `<div>
              <p>Virtue FX Manager repose sur une navigation visuelle. Identifiez vos plugins grâce à leurs véritables interfaces graphiques plutôt que de simples listes de texte :</p>
              <ul>
                <li><strong>Mode Grille vs Liste :</strong> Basculez entre l'affichage graphique par cartes et le tableau détaillé de métadonnées avec les boutons d'affichage en haut.</li>
                <li><strong>Outil de capture intégré (Appareil photo) :</strong> Pour générer des captures personnalisées, ouvrez le plugin dans REAPER, survolez-le dans l'interface de Virtue et cliquez sur l'**icône d'appareil photo** (ou utilisez le raccourci de capture). Virtue recadrera la fenêtre du plugin et l'enregistrera dans votre catalogue local.</li>
                <li><strong>Illustrations par défaut :</strong> Des visuels élégants par catégorie sont fournis pour conserver un affichage propre dès le premier lancement.</li>
              </ul>
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
            </div>`
        },
        {
          id: "visual-thumbnails",
          title: "2. विज़ुअल थंबनेल सिस्टम और कैमरा यूटिलिटी",
          content: `<div>
              <p>Virtue FX Manager पूरी तरह विज़ुअल है। आप प्लगइन्स को सादे टेक्स्ट के बजाय उनके वास्तविक ग्राफ़िकल इंटरफ़ेस के साथ ब्राउज़ कर सकते हैं:</p>
              <ul>
                <li><strong>ग्रिड बनाम सूची दृश्य (List View):</strong> ब्राउज़र के शीर्ष पर लेआउट स्विचर का उपयोग करके कार्ड ग्रिड और विस्तृत सूची तालिका के बीच आसानी से टॉगल करें।</li>
                <li><strong>इन-बिल्ट कैमरा कैप्चर:</strong> कस्टम थंबनेल जनरेट करने के लिए, REAPER में प्लगइन की स्क्रीन खोलें, Virtue में उसके नाम पर माउस लाएं और **कैमरा आइकन** पर क्लिक करें। Virtue प्लगइन विंडो के स्क्रीनशॉट को क्रॉप करके सहेज लेगा।</li>
                <li><strong>डिफ़ॉल्ट थंबनेल:</strong> सभी मुख्य श्रेणियों के लिए आकर्षक डिफ़ॉल्ट चित्र शामिल हैं ताकि आपकी लाइब्रेरी पहले दिन से ही सुंदर दिखे।</li>
              </ul>
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
            </div>`
        },
        {
          id: "visual-thumbnails",
          title: "2. نظام الصور المصغرة المرئية وأداة الكاميرا",
          content: `<div>
              <p>تم تصميم Virtue FX Manager حول تدفق العمل البصري. تصفح المكونات بواجهاتها الرسومية الحقيقية بدلاً من الأسطر النصية البسيطة:</p>
              <ul>
                <li><strong>عرض الشبكة مقابل عرض القائمة:</strong> بدل بين تخطيط البطاقات الرسومي وجدول تفصيلي للمعلومات باستخدام أزرار العرض في الأعلى.</li>
                <li><strong>أداة الكاميرا المدمجة:</strong> لالتقاط صورة مصغرة مخصصة، افتح واجهة المكون في REAPER، ومرر الماوس فوق المكون في Virtue، ثم اضغط على **أيقونة الكاميرا** أو اختصار الالتقاط. ستقوم الأداة باقتصاص وحفظ لقطة شاشة للنافذة في قاعدة بياناتك.</li>
                <li><strong>الرسوم الافتراضية:</strong> يتضمن التطبيق رسوماً افتراضية منسقة لكل فئة صوتية لتبدو مكتبتك منسقة وجميلة منذ اليوم الأول.</li>
              </ul>
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
            </div>`
        },
        {
          id: "visual-thumbnails",
          title: "২. ভিজ্যুয়াল থাম্বনেইল সিস্টেম ও ক্যামেরা স্ক্রিনশট ইউটিলিটি",
          content: `<div>
              <p>Virtue FX Manager সম্পূর্ণ ভিজ্যুয়াল। আপনি সাধারণ টেক্সটের পরিবর্তে প্লাগইনগুলোর আসল গ্রাফিক্যাল ইন্টারফেস দেখে ব্রাউজ করতে পারবেন:</p>
              <ul>
                <li><strong>গ্রিড বনাম তালিকা ভিউ (List View):</strong> ব্রাউজারের শীর্ষে লেআউট সুইচার ব্যবহার করে ভিজ্যুয়াল গ্রিড কার্ড এবং বিস্তারিত তালিকা ভিউ-এর মধ্যে সহজে পরিবর্তন করুন।</li>
                <li><strong>ইন-বিল্ট ক্যামেরা ক্যাপচার:</strong> নিজস্ব থাম্বনেইল তৈরি করতে, REAPER-এ প্লাগইনের স্ক্রিনটি খুলুন, Virtue-তে তার নামের ওপর মাউস আনুন এবং **ক্যামেরা আইকনে** ক্লিক করুন। Virtue প্লাগইন উইন্ডোর স্ক্রিনশটটি ক্রপ করে সঙ্কলন করে নেবে।</li>
                <li><strong>ডিফল্ট থাম্বনেইল:</strong> সব প্রধান বিভাগের জন্য সুন্দর ডিফল্ট থাম্বনেইল অন্তর্ভুক্ত রয়েছে যাতে প্রথম দিন থেকেই আপনার লাইব্রেরি সাজানো দেখায়।</li>
              </ul>
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
            </div>`
        },
        {
          id: "visual-thumbnails",
          title: "2. Визуальные эскизы и встроенная камера",
          content: `<div>
              <p>Virtue FX Manager ориентирован на визуальное представление. Вы можете просматривать плагины по их реальным интерфейсам вместо простых текстовых списков:</p>
              <ul>
                <li><strong>Режим сетки и список:</strong> Переключайтесь между графическим отображением карточек и подробной таблицей метаданных с помощью кнопок в верхней части браузера.</li>
                <li><strong>Встроенная камера для снимков:</strong> Чтобы создать собственный эскиз, откройте интерфейс плагина в REAPER, наведите мышь на плагин в Virtue и нажмите на **иконку камеры** или клавишу захвата. Virtue аккуратно вырежет окно плагина и применит изображение.</li>
                <li><strong>Эскизы по умолчанию:</strong> Для основных категорий включены базовые иллюстрации, чтобы ваша библиотека выглядела эстетично с первого запуска.</li>
              </ul>
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
            </div>`
        },
        {
          id: "visual-thumbnails",
          title: "2. بصری تھمب نیلز اور کیمرہ ٹول",
          content: `<div>
              <p>Virtue FX Manager مکمل طور پر بصری فلو کے گرد ڈیزائن کیا گیا ہے۔ آپ پلگ انز کو سادہ ٹیکسٹ کے بجائے ان کے اصل گرافیکل انٹرفیس کے ساتھ براؤز کر سکتے ہیں:</p>
              <ul>
                <li><strong>گریڈ بمقابلہ لسٹ ویو (List View):</strong> براؤزر کے اوپر لے آؤٹ سوئچر کا استعمال کرتے ہوئے گرافیکل کارڈز اور تفصیلی لسٹ ویو کے درمیان آسانی سے سوئچ کریں۔</li>
                <li><strong>ان بلٹ کیمرہ کیپچر:</strong> کسٹم تھمب نیلز بنانے کے لیے، REAPER میں پلگ ان کا انٹرفیس کھولیں، Virtue میں اس کے نام پر ماؤس لائیں اور **کیمرہ آئیکن** پر کلک کریں۔ Virtue پلگ ان ونڈو کے اسکرین شاٹ کو کراپ کر کے محفوظ کر لے گا۔</li>
                <li><strong>ڈیفالٹ تھمب نیلز:</strong> تمام اہم کیٹیگریز کے لیے خوبصورت ڈیفالٹ تصاویر شامل ہیں تاکہ آپ کی لائبریری پہلے دن سے ہی شاندار نظر آئے۔</li>
              </ul>
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
