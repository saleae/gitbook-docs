/**
 * Support IA (Information Architecture) map.
 *
 * Defines the reorganized navigation structure for support docs.
 * Every article is referenced by its existing slug (derived from file path).
 * The source files and URLs are unchanged — only the nav tree is different.
 *
 * Structure: up to 3 levels (section -> group -> article, or
 * section -> group -> subgroup -> article).
 *
 * Group nodes (title + children, no slug) are collapsible headings in the
 * sidebar. They don't have their own page.
 */

export interface MapSection {
  id: string;
  title: string;
  description: string;
  icon: string;
  /** When true, ungrouped articles show prev/next nav (walkthrough content) */
  sequential?: boolean;
  items: MapItem[];
}

export interface MapItem {
  /** Leaf article — references existing content by slug */
  slug?: string;
  /** Override display title (for group headings or article renames) */
  title?: string;
  /** Nested items (makes this a group node) */
  children?: MapItem[];
  /** When true on a group node, articles show prev/next nav (walkthrough content) */
  sequential?: boolean;
}

export const supportMap: MapSection[] = [
  // ---------------------------------------------------------------
  // 1. Getting Started
  // ---------------------------------------------------------------
  {
    id: "getting-started",
    title: "Getting Started",
    description: "First-time setup and orientation for your Saleae device",
    icon: "rocket",
    sequential: true,
    items: [
      { slug: "getting-started/product-summary" },
      { slug: "getting-started/setup" },
      { slug: "getting-started/configure" },
      { slug: "getting-started/record" },
      { slug: "getting-started/navigate" },
      { slug: "getting-started/measure" },
      { slug: "getting-started/trigger" },
      { slug: "getting-started/protocols" },
      { slug: "getting-started/identify-each-saleae-device" },
      { slug: "getting-started/what-is-included" },
      { slug: "getting-started/what-accessories-if-any-should-i-purchase-with-my-device" },
    ],
  },

  // ---------------------------------------------------------------
  // 2. Logic Software
  // ---------------------------------------------------------------
  {
    id: "logic-software",
    title: "Logic Software",
    description: "Download, install, and use Logic 2 software",
    icon: "monitor",
    items: [
      {
        title: "Download & Installation",
        sequential: true,
        children: [
          { slug: "logic-software/download-and-installation/sw-download" },
          { slug: "logic-software/download-and-installation/sw-installation" },
          { slug: "logic-software/download-and-installation/supported-operating-systems" },
          { slug: "logic-software/download-and-installation/firmware-updates" },
          { slug: "logic-software/download-and-installation/driver-install" },
          { slug: "logic-software/download-and-installation/is-silent-installation-supported" },
          { slug: "logic-software/download-and-installation/which-version-of-the-software-should-i-use" },
          { slug: "logic-software/download-and-installation/standalone-software-info" },
          { slug: "logic-software/download-and-installation/running-multiple-versions-of-the-software" },
          { slug: "logic-software/download-and-installation/older-software-releases" },
          { slug: "logic-software/download-and-installation/logic-1.x-installation" },
          { slug: "logic-software/download-and-installation/changelog" },
          { slug: "logic-software/download-and-installation/logic-1.x-user-guide" },
        ],
      },
      {
        title: "Capturing Data",
        sequential: true,
        children: [
          { slug: "logic-software/capturing-data/connecting-the-logic-hardware" },
          { slug: "logic-software/capturing-data/connecting-accessories" },
          { slug: "logic-software/capturing-data/capture-settings" },
          { slug: "logic-software/capturing-data/capture-modes" },
          { slug: "logic-software/capturing-data/capture-settings-configuration-guide" },
          { slug: "logic-software/capturing-data/what-sample-rate-is-required" },
          { slug: "logic-software/capturing-data/what-sample-rate-settings-are-available" },
          { slug: "logic-software/capturing-data/how-long-can-i-record-data" },
          { slug: "logic-software/capturing-data/automate-long-captures" },
          { slug: "logic-software/capturing-data/suggestions-for-capturing-multiple-instances-of-a-triggered-event-automatically" },
          { slug: "logic-software/capturing-data/how-to-trigger-the-end-of-a-capture-instead-of-the-start" },
          { slug: "logic-software/capturing-data/demo-mode" },
        ],
      },
      {
        title: "Viewing & Analyzing Data",
        sequential: true,
        children: [
          { slug: "logic-software/viewing-and-analyzing-data/navigating-the-software" },
          { slug: "logic-software/viewing-and-analyzing-data/navigating-your-data" },
          { slug: "logic-software/viewing-and-analyzing-data/time-bar-settings" },
          { slug: "logic-software/viewing-and-analyzing-data/measurements-timing-markers" },
          { slug: "logic-software/viewing-and-analyzing-data/using-protocol-analyzers" },
          { slug: "logic-software/viewing-and-analyzing-data/data-table-and-terminal" },
          { slug: "logic-software/viewing-and-analyzing-data/software-glitch-filter" },
          { slug: "logic-software/viewing-and-analyzing-data/changing-the-display-radix" },
          { slug: "logic-software/viewing-and-analyzing-data/how-does-ascii-display-characters" },
          { slug: "logic-software/viewing-and-analyzing-data/what-annotations-are-supported" },
          { slug: "logic-software/viewing-and-analyzing-data/generate-analog-graph-from-digital-data" },
          { slug: "logic-software/viewing-and-analyzing-data/how-can-i-compare-signals-from-different-captures" },
          { slug: "logic-software/viewing-and-analyzing-data/compare-two-clock-signals-for-synchronization-and-drift" },
          { slug: "logic-software/viewing-and-analyzing-data/viewing-i2c-addresses-as-8-bit" },
          { slug: "logic-software/viewing-and-analyzing-data/delete-data" },
          { slug: "logic-software/viewing-and-analyzing-data/set-analyzer-starting-point" },
        ],
      },
      {
        title: "Saving & Exporting Data",
        sequential: true,
        children: [
          { slug: "logic-software/saving-and-exporting-data/saving-loading-and-exporting-data" },
          { slug: "logic-software/saving-and-exporting-data/exporting-data" },
          { slug: "logic-software/saving-and-exporting-data/binary-and-csv-export-formats-2025-update" },
          { slug: "logic-software/saving-and-exporting-data/can-i-share-data-captures" },
          { slug: "logic-software/saving-and-exporting-data/export-between-timing-markers" },
          { slug: "logic-software/saving-and-exporting-data/what-options-are-there-to-export-multiple-protocol-analyzer-results-into-the-same-file" },
          { slug: "logic-software/saving-and-exporting-data/how-to-export-serial-protocol-results-to-a-raw-binary-file" },
          { slug: "logic-software/saving-and-exporting-data/how-do-i-convert-exported-csv-analog-data-in-voltages" },
          { slug: "logic-software/saving-and-exporting-data/differentiate-data-in-the-export-file" },
          { slug: "logic-software/saving-and-exporting-data/how-long-does-it-take-to-save-a-file" },
          { slug: "logic-software/saving-and-exporting-data/is-it-possible-to-import-data-into-the-logic-software" },
          { slug: "logic-software/saving-and-exporting-data/can-i-create-or-edit-logicdata-files" },
          { slug: "logic-software/saving-and-exporting-data/open-logicdata-files" },
          { slug: "logic-software/saving-and-exporting-data/sal-file-format" },
          { slug: "logic-software/saving-and-exporting-data/is-my-capture-data-private" },
          { slug: "logic-software/saving-and-exporting-data/binary-data-export-format" },
          { slug: "logic-software/saving-and-exporting-data/data-export-format-analog-binary" },
          { slug: "logic-software/saving-and-exporting-data/binary-export-format-logic-2" },
          { slug: "logic-software/saving-and-exporting-data/matlab-data-export-format" },
        ],
      },
      {
        title: "Settings & Preferences",
        sequential: true,
        children: [
          { slug: "logic-software/settings-and-preferences/color-themes" },
          { slug: "logic-software/settings-and-preferences/keyboard-shortcuts" },
          { slug: "logic-software/settings-and-preferences/automatic-updates" },
          { slug: "logic-software/settings-and-preferences/location-of-your-config-file" },
          { slug: "logic-software/settings-and-preferences/changing-window-resolution" },
        ],
      },
    ],
  },

  // ---------------------------------------------------------------
  // 3. Protocol Analyzers
  // ---------------------------------------------------------------
  {
    id: "protocol-analyzers",
    title: "Protocol Analyzers",
    description: "Analyzer guides, protocol learning resources, and frame format reference",
    icon: "spec-digital",
    items: [
      {
        title: "Supported Protocols",
        children: [
          { slug: "protocol-analyzers/supported-protocols/supported-protocols" },
          { slug: "protocol-analyzers/supported-protocols/recording-multiple-protocols" },
          { slug: "protocol-analyzers/supported-protocols/how-many-protocol-analyzers-can-be-used-at-once" },
          { slug: "protocol-analyzers/supported-protocols/what-is-the-best-way-to-compare-similar-sequences-of-protocol-data" },
        ],
      },
      {
        title: "Analyzer User Guides",
        children: [
          { slug: "protocol-analyzers/analyzer-user-guides/using-async-serial" },
          { slug: "protocol-analyzers/analyzer-user-guides/using-spi" },
          { slug: "protocol-analyzers/analyzer-user-guides/using-i2c" },
          { slug: "protocol-analyzers/analyzer-user-guides/using-can" },
          { slug: "protocol-analyzers/analyzer-user-guides/using-simple-parallel" },
          { slug: "protocol-analyzers/analyzer-user-guides/using-i2s-pcm" },
          { slug: "protocol-analyzers/analyzer-user-guides/using-dmx-512" },
          { slug: "protocol-analyzers/analyzer-user-guides/using-the-smbus-analyzer" },
          { slug: "protocol-analyzers/analyzer-user-guides/decode-differential-and-high-voltage-data" },
          { slug: "protocol-analyzers/analyzer-user-guides/convert-i2s-pcm-to-audio" },
          { slug: "protocol-analyzers/analyzer-user-guides/which-saleae-products-can-decode-4-bit-parallel-lcd-communications" },
        ],
      },
      {
        title: "Learn Digital Protocols",
        children: [
          { slug: "protocol-analyzers/learn-digital-protocols/learn-asynchronous-serial" },
          { slug: "protocol-analyzers/learn-digital-protocols/learn-i2c" },
          { slug: "protocol-analyzers/learn-digital-protocols/learn-spi" },
          { slug: "protocol-analyzers/learn-digital-protocols/learn-can" },
          { slug: "protocol-analyzers/learn-digital-protocols/digital-multiplex-dmx512" },
          { slug: "protocol-analyzers/learn-digital-protocols/manchester" },
          { slug: "protocol-analyzers/learn-digital-protocols/1-wire" },
          { slug: "protocol-analyzers/learn-digital-protocols/inter-ic-sound-i2s-pcm" },
          { slug: "protocol-analyzers/learn-digital-protocols/management-data-input-output-mdio" },
          { slug: "protocol-analyzers/learn-digital-protocols/biss-c" },
          { slug: "protocol-analyzers/learn-digital-protocols/hdmi-consumer-electronics-control-cec" },
          { slug: "protocol-analyzers/learn-digital-protocols/ps-2-keyboard-mouse" },
          { slug: "protocol-analyzers/learn-digital-protocols/universal-serial-bus-usb-2.0" },
          { slug: "protocol-analyzers/learn-digital-protocols/single-wire-interface-swi" },
          { slug: "protocol-analyzers/learn-digital-protocols/simple-parallel" },
          { slug: "protocol-analyzers/learn-digital-protocols/local-interconnect-network-lin" },
          { slug: "protocol-analyzers/learn-digital-protocols/joint-test-action-group-jtag" },
        ],
      },
    ],
  },

  // ---------------------------------------------------------------
  // 4. Extensions & API
  // ---------------------------------------------------------------
  {
    id: "extensions-api",
    title: "Extensions & API",
    description: "HLAs, measurement extensions, automation API, and protocol analyzer SDK",
    icon: "plug",
    items: [
      {
        title: "Extensions",
        children: [
          { slug: "extensions-api/extensions/installing-extensions" },
          { slug: "extensions-api/extensions/extensions-quickstart" },
          { slug: "extensions-api/extensions/high-level-analyzer-extensions" },
          { slug: "extensions-api/extensions/shared-high-level-analyzers-hlas" },
          { slug: "extensions-api/extensions/measurement-extensions" },
          { slug: "extensions-api/extensions/analog-measurement-extensions" },
          { slug: "extensions-api/extensions/digital-measurement-extensions" },
          { slug: "extensions-api/extensions/extension-file-format" },
          { slug: "extensions-api/extensions/publish-an-extension" },
          { slug: "extensions-api/extensions/about-third-party-extensions" },
          { slug: "extensions-api/extensions/disabling-marketplace-extensions" },
          { slug: "extensions-api/extensions/api-documentation" },
          { slug: "extensions-api/extensions/python-package-support" },
        ],
      },
      {
        title: "Automation API",
        children: [
          { slug: "extensions-api/automation-api/automation" },
          { slug: "extensions-api/automation-api/how-to-manage-protocol-analyzers-when-using-the-socket-api" },
          { slug: "extensions-api/automation-api/extract-data-using-socket-api" },
          { slug: "extensions-api/automation-api/export-data" },
          { slug: "extensions-api/automation-api/running-logic-in-a-ci-environment-on-windows-with-the-system-account" },
          { slug: "extensions-api/automation-api/connecting-remotely-with-ssh" },
          { slug: "extensions-api/automation-api/is-there-cross-platform-support-for-the-saleaesocketapi-c-project" },
          { slug: "extensions-api/automation-api/device-sdk" },
          { slug: "extensions-api/automation-api/vb-net" },
          { slug: "extensions-api/automation-api/automation-legacy-logic1" },
          { slug: "extensions-api/automation-api/how-to-trigger-on-a-pulse-with-no-maximum-time-limit" },
        ],
      },
      {
        title: "Protocol Analyzer SDK",
        children: [
          { slug: "extensions-api/protocol-analyzer-sdk/protocol-analyzer-sdk" },
          { slug: "extensions-api/protocol-analyzer-sdk/framev2-hla-support-analyzer-sdk" },
          { slug: "extensions-api/protocol-analyzer-sdk/renaming-a-custom-analyzer" },
          { slug: "extensions-api/protocol-analyzer-sdk/migrate-code-to-the-new-analyzer-sdk" },
          { slug: "extensions-api/protocol-analyzer-sdk/sharing-custom-analyzer-code" },
          { slug: "extensions-api/protocol-analyzer-sdk/setting-up-developer-directory" },
          { slug: "extensions-api/protocol-analyzer-sdk/can-custom-analyzers-process-analog-channels" },
          { slug: "extensions-api/protocol-analyzer-sdk/packet-level-decoding-support-in-the-analyzer-sdk" },
          { slug: "extensions-api/protocol-analyzer-sdk/osx-analyzer-sdk-xcode-setup" },
          { slug: "extensions-api/protocol-analyzer-sdk/how-to-view-and-debug-firmware-variables-state-and-function-calls" },
        ],
      },
      {
        title: "HLA Frame Format Reference",
        children: [
          { slug: "extensions-api/hla-frame-format-reference/serial-analyzer" },
          { slug: "extensions-api/hla-frame-format-reference/i2c-analyzer" },
          { slug: "extensions-api/hla-frame-format-reference/spi-analyzer" },
          { slug: "extensions-api/hla-frame-format-reference/can-analyzer" },
          { slug: "extensions-api/hla-frame-format-reference/manchester-analyzer" },
          { slug: "extensions-api/hla-frame-format-reference/1-wire-analyzer" },
          { slug: "extensions-api/hla-frame-format-reference/async-rgb-led-analyzer" },
          { slug: "extensions-api/hla-frame-format-reference/simple-parallel-analyzer" },
          { slug: "extensions-api/hla-frame-format-reference/lin-analyzer" },
          { slug: "extensions-api/hla-frame-format-reference/i2s-analyzer" },
        ],
      },
    ],
  },

  // ---------------------------------------------------------------
  // 5. Specifications & Hardware
  // ---------------------------------------------------------------
  {
    id: "specifications-hardware",
    title: "Specifications & Hardware",
    description: "Datasheets, electrical specs, USB connectivity, and product comparison",
    icon: "clipboard",
    items: [
      {
        title: "Datasheets & Compliance",
        children: [
          { slug: "specifications-hardware/datasheets-and-compliance/datasheets" },
          { slug: "specifications-hardware/datasheets-and-compliance/system-requirements-for-saleae-products" },
          { slug: "specifications-hardware/datasheets-and-compliance/logic-hardware-revisions" },
          { slug: "specifications-hardware/datasheets-and-compliance/connector-dimensions" },
          { slug: "specifications-hardware/datasheets-and-compliance/compliance-documentation" },
          { slug: "specifications-hardware/datasheets-and-compliance/saleae-part-numbers" },
          { slug: "specifications-hardware/datasheets-and-compliance/fcc-and-ce-testing-recommendations" },
        ],
      },
      {
        title: "Electrical Characteristics",
        children: [
          { slug: "specifications-hardware/electrical-characteristics/supported-voltages" },
          { slug: "specifications-hardware/electrical-characteristics/device-calibration" },
          { slug: "specifications-hardware/electrical-characteristics/resolution-of-the-analog-inputs" },
          { slug: "specifications-hardware/electrical-characteristics/can-i-change-the-voltage-range-of-the-analog-inputs" },
          { slug: "specifications-hardware/electrical-characteristics/adjusting-thresholds" },
          { slug: "specifications-hardware/electrical-characteristics/are-inputs-isolated" },
          { slug: "specifications-hardware/electrical-characteristics/do-the-saleae-devices-support-ac-coupling" },
          { slug: "specifications-hardware/electrical-characteristics/suggestions-for-electrical-isolation" },
          { slug: "specifications-hardware/electrical-characteristics/what-is-the-maximum-bandwidth" },
          { slug: "specifications-hardware/electrical-characteristics/what-is-asynchronous-sampling" },
          { slug: "specifications-hardware/electrical-characteristics/are-the-inputs-synchronously-sampled-or-sweep-sampled" },
          { slug: "specifications-hardware/electrical-characteristics/worst-case-channel-skew" },
          { slug: "specifications-hardware/electrical-characteristics/can-saleae-products-output-data" },
          { slug: "specifications-hardware/electrical-characteristics/why-does-logic-get-warm" },
          { slug: "specifications-hardware/electrical-characteristics/are-the-ground-pins-required-for-each-input-used" },
        ],
      },
      {
        title: "USB & Connectivity",
        children: [
          { slug: "specifications-hardware/usb-and-connectivity/recommended-usb-3.0-host-controller-cards" },
          { slug: "specifications-hardware/usb-and-connectivity/extension-cables-and-vm" },
          { slug: "specifications-hardware/usb-and-connectivity/full-speed-usb-isolator" },
          { slug: "specifications-hardware/usb-and-connectivity/support-for-usb-3.0-and-usb-3.1" },
          { slug: "specifications-hardware/usb-and-connectivity/do-i-have-a-usb-3.0-port" },
          { slug: "specifications-hardware/usb-and-connectivity/usb-3.0-host-controller-info" },
          { slug: "specifications-hardware/usb-and-connectivity/logic-reports-different-usb-current-requirements" },
          { slug: "specifications-hardware/usb-and-connectivity/usb-c-cable-recommendations" },
          { slug: "specifications-hardware/usb-and-connectivity/ethernet-connectivity" },
          { slug: "specifications-hardware/usb-and-connectivity/using-saleae-logic-devices-with-third-party-pattern-generators" },
          { slug: "specifications-hardware/usb-and-connectivity/use-multiple-logics-on-a-single-pc" },
        ],
      },
      {
        title: "Product Comparison & Selection",
        children: [
          { slug: "specifications-hardware/product-comparison-and-selection/how-to-choose-the-right-logic-analyzer-for-you" },
          { slug: "specifications-hardware/product-comparison-and-selection/gen1-gen2-differences" },
          { slug: "specifications-hardware/product-comparison-and-selection/are-there-feature-differences-in-the-sw" },
          { slug: "specifications-hardware/product-comparison-and-selection/which-saleae-devices-support-analog-recording" },
          { slug: "specifications-hardware/product-comparison-and-selection/can-these-products-replace-an-oscilloscope" },
          { slug: "specifications-hardware/product-comparison-and-selection/do-the-saleae-logic-analyzers-support-trigger-out" },
          { slug: "specifications-hardware/product-comparison-and-selection/what-is-the-normal-behavior-of-the-led" },
          { slug: "specifications-hardware/product-comparison-and-selection/ch0-black-wire" },
          { slug: "specifications-hardware/product-comparison-and-selection/test-clip-differences" },
          { slug: "specifications-hardware/product-comparison-and-selection/safety-and-warranty" },
          // Merge candidate — kept until merged with how-to-choose above
          { slug: "specifications-hardware/product-comparison-and-selection/which-logic-analyzer-to-get" },
        ],
      },
    ],
  },

  // ---------------------------------------------------------------
  // 6. Troubleshooting
  // ---------------------------------------------------------------
  {
    id: "troubleshooting",
    title: "Troubleshooting",
    description: "Problem-to-solution guides grouped by symptom",
    icon: "wrench",
    items: [
      {
        title: "Installation & Launch Issues",
        children: [
          { slug: "troubleshooting/installation-and-launch-issues/will-not-install" },
          { slug: "troubleshooting/installation-and-launch-issues/fails-to-launch" },
          { slug: "troubleshooting/installation-and-launch-issues/error-message-0xc0000005" },
          { slug: "troubleshooting/installation-and-launch-issues/api-ms-win-crt-runtime-missing" },
          { slug: "troubleshooting/installation-and-launch-issues/disk1-cab-has-invalid-digital-signature" },
          { slug: "troubleshooting/installation-and-launch-issues/can-logic-run-on-arm" },
          { slug: "troubleshooting/installation-and-launch-issues/tablet-support" },
          { slug: "troubleshooting/installation-and-launch-issues/is-it-possible-to-run-the-saleae-software-on-a-pc-without-sse2-instructions" },
        ],
      },
      {
        title: "Device Connection Issues",
        children: [
          { slug: "troubleshooting/device-connection-issues/logic-not-detected" },
          { slug: "troubleshooting/device-connection-issues/error-a-logic-device-found" },
          { slug: "troubleshooting/device-connection-issues/device-removed-before-initialization" },
          { slug: "troubleshooting/device-connection-issues/error-an-unknown-error-occurred-during-device-connection" },
          { slug: "troubleshooting/device-connection-issues/logic-does-not-connect-over-usb3" },
          { slug: "troubleshooting/device-connection-issues/connection-conflicts-with-usb-debuggers" },
          { slug: "troubleshooting/device-connection-issues/pc-restart-causes-logic-to-disconnect" },
          { slug: "troubleshooting/device-connection-issues/other-drivers-interfere" },
          { slug: "troubleshooting/device-connection-issues/usb-driver-problem" },
          { slug: "troubleshooting/device-connection-issues/limitations-of-logic-pro-usb2" },
          { slug: "troubleshooting/device-connection-issues/reinstall-usb-host-controller-drivers" },
          { slug: "troubleshooting/device-connection-issues/device-setup-failure" },
          { slug: "troubleshooting/device-connection-issues/error-function-device2-setupdevice" },
          { slug: "troubleshooting/device-connection-issues/start-command-error" },
          { slug: "troubleshooting/device-connection-issues/the-devices-usb-vid-and-pid-failed" },
          { slug: "troubleshooting/device-connection-issues/sw-shows-multiple-analyzers" },
          { slug: "troubleshooting/device-connection-issues/move-logic-to-its-own-host-controller" },
          { slug: "troubleshooting/device-connection-issues/usb-3.0-cable-customer-notice" },
        ],
      },
      {
        title: "Capture & Recording Issues",
        children: [
          { slug: "troubleshooting/capture-and-recording-issues/device-not-able-to-keep-up" },
          { slug: "troubleshooting/capture-and-recording-issues/capture-stopped-error" },
          { slug: "troubleshooting/capture-and-recording-issues/backlog-error" },
          { slug: "troubleshooting/capture-and-recording-issues/captured-data-looks-incorrect" },
          { slug: "troubleshooting/capture-and-recording-issues/the-captured-data-is-corrupted" },
          { slug: "troubleshooting/capture-and-recording-issues/waiting-for-trigger-never-closes" },
          { slug: "troubleshooting/capture-and-recording-issues/pre-trigger-buffer-incomplete" },
          { slug: "troubleshooting/capture-and-recording-issues/maximum-sample-rate-not-selectable" },
          { slug: "troubleshooting/capture-and-recording-issues/digital-and-analog-appear-different" },
          { slug: "troubleshooting/capture-and-recording-issues/seeing-spikes-in-digital-capture" },
          { slug: "troubleshooting/capture-and-recording-issues/why-is-the-length-of-my-capture-incorrect" },
          { slug: "troubleshooting/capture-and-recording-issues/my-capture-shows-an-uneven-duty-cycle" },
          { slug: "troubleshooting/capture-and-recording-issues/time-measurement-error" },
          { slug: "troubleshooting/capture-and-recording-issues/memory-usage-with-triggered-captures" },
          { slug: "troubleshooting/capture-and-recording-issues/logic-interferes-with-circuit" },
          { slug: "troubleshooting/capture-and-recording-issues/crosstalk" },
          { slug: "troubleshooting/capture-and-recording-issues/how-can-i-record-power-consumption" },
        ],
      },
      {
        title: "Software Crashes & Errors",
        children: [
          { slug: "troubleshooting/software-crashes-and-errors/software-has-crashed" },
          { slug: "troubleshooting/software-crashes-and-errors/saving-or-loading-anything-crashes-the-sw" },
          { slug: "troubleshooting/software-crashes-and-errors/sw-crashes-with-virtual-desktops" },
          { slug: "troubleshooting/software-crashes-and-errors/error-out-of-memory-exception" },
          { slug: "troubleshooting/software-crashes-and-errors/error-message-unable-to-detect-webgl" },
          { slug: "troubleshooting/software-crashes-and-errors/error-message-failed-to-load-extension" },
          { slug: "troubleshooting/software-crashes-and-errors/failed-to-load-lla" },
          { slug: "troubleshooting/software-crashes-and-errors/error-loading-marketplace-extensions" },
          { slug: "troubleshooting/software-crashes-and-errors/unsupported-version" },
          { slug: "troubleshooting/software-crashes-and-errors/logic-2-error-messages" },
          { slug: "troubleshooting/software-crashes-and-errors/sw-issues-with-encryption" },
          { slug: "troubleshooting/software-crashes-and-errors/is-logic-affected-by-the-log4j-exploit" },
          { slug: "troubleshooting/software-crashes-and-errors/trouble-downloading-the-latest-software" },
        ],
      },
      {
        title: "Data & Analysis Issues",
        children: [
          { slug: "troubleshooting/data-and-analysis-issues/protocol-analyzer-produces-unexpected-results" },
          { slug: "troubleshooting/data-and-analysis-issues/the-logic-softwares-data-export-feature-is-not-working-properly" },
          { slug: "troubleshooting/data-and-analysis-issues/csv-export-slow" },
          { slug: "troubleshooting/data-and-analysis-issues/data-table-shows-incorrect-values" },
          { slug: "troubleshooting/data-and-analysis-issues/a-measurement-appears-incorrect" },
          { slug: "troubleshooting/data-and-analysis-issues/my-rise-time-and-fall-time-measurements-seem-incorrect" },
          { slug: "troubleshooting/data-and-analysis-issues/channels-are-missing" },
          { slug: "troubleshooting/data-and-analysis-issues/hla-fails-to-display-special-characters" },
          { slug: "troubleshooting/data-and-analysis-issues/this-analyzers-native-export-is-not-supported-in-logic-2" },
          { slug: "troubleshooting/data-and-analysis-issues/add-analyzer-not-displaying" },
          { slug: "troubleshooting/data-and-analysis-issues/exported-matlab-file-does-not-open" },
          { slug: "troubleshooting/data-and-analysis-issues/save-capture-and-export-data-disabled" },
          { slug: "troubleshooting/data-and-analysis-issues/timing-markers-disappear" },
          { slug: "troubleshooting/data-and-analysis-issues/why-is-the-options-button-missing" },
          { slug: "troubleshooting/data-and-analysis-issues/native-windowing-features-are-not-working" },
        ],
      },
      {
        title: "Performance Issues",
        children: [
          { slug: "troubleshooting/performance-issues/pc-performance-issues" },
          { slug: "troubleshooting/performance-issues/logic2-consuming-disk-space" },
          { slug: "troubleshooting/performance-issues/mouse-scrolling-issues" },
        ],
      },
      {
        title: "Platform-Specific Issues",
        children: [
          { slug: "troubleshooting/platform-specific-issues/linux-permission-requirements-for-logic-software" },
          { slug: "troubleshooting/platform-specific-issues/linux-shared-memory-crash" },
          { slug: "troubleshooting/platform-specific-issues/analog-waveforms-do-not-appear-on-linux" },
          { slug: "troubleshooting/platform-specific-issues/usb-debugging-for-linux-kernels" },
          { slug: "troubleshooting/platform-specific-issues/centos-compatibility-issues" },
          { slug: "troubleshooting/platform-specific-issues/xmonad-on-linux-causes-issues" },
          { slug: "troubleshooting/platform-specific-issues/known-issues-on-os-x" },
          { slug: "troubleshooting/platform-specific-issues/vs-code-fails-to-launch-python-automation-api-script" },
          { slug: "troubleshooting/platform-specific-issues/visual-studio-error-failed-to-launch-debug-adapter" },
          { slug: "troubleshooting/platform-specific-issues/sw-support-for-original-logic" },
        ],
      },
      {
        title: "Diagnostic Tools",
        children: [
          { slug: "troubleshooting/diagnostic-tools/sharing-your-machine-id" },
          { slug: "troubleshooting/diagnostic-tools/sharing-crash-logs" },
          { slug: "troubleshooting/diagnostic-tools/console-output" },
          { slug: "troubleshooting/diagnostic-tools/pc-detection-test" },
          { slug: "troubleshooting/diagnostic-tools/led-blinks-red" },
          { slug: "troubleshooting/diagnostic-tools/all-known-issues" },
        ],
      },
    ],
  },

  // ---------------------------------------------------------------
  // 7. Ordering & Returns
  // ---------------------------------------------------------------
  {
    id: "ordering-returns",
    title: "Ordering & Returns",
    description: "Purchasing, shipping, warranties, and return policies",
    icon: "package",
    items: [
      { slug: "ordering-returns/how-do-i-place-an-order" },
      { slug: "ordering-returns/how-do-i-get-a-quote" },
      { slug: "ordering-returns/place-a-purchase-order-po" },
      { slug: "ordering-returns/distributors" },
      { slug: "ordering-returns/check-your-order-status" },
      { slug: "ordering-returns/pricing-and-availability" },
      { slug: "ordering-returns/what-discounts-are-available" },
      { slug: "ordering-returns/tax-exemption" },
      { slug: "ordering-returns/shipping-policy" },
      { slug: "ordering-returns/invoices" },
      { slug: "ordering-returns/180-day-return-policy-and-3-year-warranty" },
      { slug: "ordering-returns/process-a-warranty" },
      { slug: "ordering-returns/business-info" },
      { slug: "ordering-returns/international-customs-and-duty-information" },
      { slug: "ordering-returns/when-is-my-card-charged" },
      { slug: "ordering-returns/ship-to-po-box-error" },
      { slug: "ordering-returns/does-saleae-offer-demo-units" },
      { slug: "ordering-returns/does-saleae-have-a-trade-in-or-upgrade-plan" },
      { slug: "ordering-returns/does-saleae-provide-drop-shipping-service" },
      { slug: "ordering-returns/is-the-saleae-software-sold-separately" },
      { slug: "ordering-returns/referral-program" },
      // Merge candidate — kept until merged with check-your-order-status above
      { slug: "ordering-returns/how-can-i-find-the-current-status-of-my-order" },
    ],
  },

  // ---------------------------------------------------------------
  // 8. Tutorials & Learning
  // ---------------------------------------------------------------
  {
    id: "tutorials-learning",
    title: "Tutorials & Learning",
    description: "Guides, example projects, and foundational concepts",
    icon: "graduation-cap",
    items: [
      {
        title: "Guides",
        children: [
          { slug: "tutorials-learning/guides/logic-analyzer-tutorial" },
          { slug: "tutorials-learning/guides/oscilloscope-tutorial" },
        ],
      },
      {
        title: "Example Projects",
        sequential: true,
        children: [
          { slug: "tutorials-learning/example-projects/how-to-measure-digital-logic" },
          { slug: "tutorials-learning/example-projects/how-to-measure-analog-signals" },
          { slug: "tutorials-learning/example-projects/how-to-analyze-uart" },
          { slug: "tutorials-learning/example-projects/how-to-analyze-spi" },
          { slug: "tutorials-learning/example-projects/how-to-analyze-i2c" },
        ],
      },
      {
        title: "Concepts",
        children: [
          { slug: "tutorials-learning/concepts/common-acronyms-and-definitions" },
          { slug: "tutorials-learning/concepts/what-is-a-glitch" },
          { slug: "tutorials-learning/concepts/what-is-ram" },
          { slug: "tutorials-learning/concepts/what-is-a-display-radix" },
          { slug: "tutorials-learning/concepts/what-is-data-bandwidth-can-i-reduce-this-in-logic" },
          { slug: "tutorials-learning/concepts/saleae-open-source-support" },
        ],
      },
    ],
  },

  // ---------------------------------------------------------------
  // 9. Community & Contact
  // ---------------------------------------------------------------
  {
    id: "community-contact",
    title: "Community & Contact",
    description: "Forums, feedback, and direct support from the Saleae team",
    icon: "message-circle",
    items: [
      { slug: "community-contact/message-us-directly" },
      { slug: "community-contact/feedback" },
      { slug: "community-contact/forum" },
      { slug: "community-contact/projects" },
      { slug: "community-contact/community-created-accessories" },
      { slug: "community-contact/community-shared-protocols" },
      { slug: "community-contact/writing-for-saleae" },
      { slug: "community-contact/help-outside-scope" },
      { slug: "community-contact/license" },
      { slug: "community-contact/how-do-you-pronounce-saleae" },
      // Not in IA doc but exists in SUMMARY.md — parked here
      { slug: "community-contact/what-higher-level-protocol-analysis-features-are-available" },
    ],
  },
];
