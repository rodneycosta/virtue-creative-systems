CREATE TABLE IF NOT EXISTS licenses (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  provider TEXT NOT NULL,
  provider_store_id TEXT,
  provider_license_id TEXT,
  provider_order_id TEXT,
  provider_customer_id TEXT,
  product_code TEXT NOT NULL,
  product_id TEXT,
  variant_id TEXT,
  license_hash TEXT NOT NULL UNIQUE,
  email_hash TEXT,
  tier TEXT NOT NULL DEFAULT 'personal',
  status TEXT NOT NULL DEFAULT 'inactive',
  activation_limit INTEGER NOT NULL DEFAULT 2,
  expires_at TEXT,
  created_at TEXT NOT NULL,
  updated_at TEXT NOT NULL,
  last_provider_sync_at TEXT
);

CREATE INDEX IF NOT EXISTS idx_licenses_provider_license_id ON licenses(provider, provider_license_id);
CREATE INDEX IF NOT EXISTS idx_licenses_order_id ON licenses(provider_order_id);
CREATE INDEX IF NOT EXISTS idx_licenses_status ON licenses(status);

CREATE TABLE IF NOT EXISTS license_activations (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  license_id INTEGER NOT NULL REFERENCES licenses(id) ON DELETE CASCADE,
  provider_instance_id TEXT,
  activation_instance_id TEXT NOT NULL UNIQUE,
  machine_hash TEXT NOT NULL,
  device_label TEXT,
  platform TEXT,
  app_version TEXT,
  status TEXT NOT NULL DEFAULT 'active',
  activated_at TEXT NOT NULL,
  last_seen_at TEXT NOT NULL,
  deactivated_at TEXT,
  deactivation_reason TEXT
);

CREATE INDEX IF NOT EXISTS idx_activations_license_status ON license_activations(license_id, status);
CREATE UNIQUE INDEX IF NOT EXISTS idx_activations_active_machine
  ON license_activations(license_id, machine_hash)
  WHERE status = 'active';

CREATE TABLE IF NOT EXISTS webhook_events (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  provider TEXT NOT NULL,
  event_name TEXT NOT NULL,
  provider_event_id TEXT,
  payload_hash TEXT NOT NULL UNIQUE,
  received_at TEXT NOT NULL,
  processed_at TEXT,
  status TEXT NOT NULL,
  error_message TEXT
);

CREATE INDEX IF NOT EXISTS idx_webhook_events_provider_event_id ON webhook_events(provider, provider_event_id);

CREATE TABLE IF NOT EXISTS release_files (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  product_code TEXT NOT NULL,
  version TEXT NOT NULL,
  platform TEXT NOT NULL,
  channel TEXT NOT NULL,
  r2_key TEXT NOT NULL,
  file_name TEXT NOT NULL,
  sha256 TEXT NOT NULL,
  size_bytes INTEGER NOT NULL,
  min_reaper_version TEXT,
  release_notes TEXT,
  minimum_supported_license_version TEXT,
  is_latest INTEGER NOT NULL DEFAULT 0,
  created_at TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_release_files_latest ON release_files(product_code, platform, channel, is_latest);

CREATE TABLE IF NOT EXISTS download_events (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  license_id INTEGER,
  activation_id INTEGER,
  release_file_id INTEGER NOT NULL REFERENCES release_files(id),
  requested_at TEXT NOT NULL,
  status TEXT NOT NULL,
  ip_hash TEXT,
  user_agent_hash TEXT
);

CREATE TABLE IF NOT EXISTS admin_audit_log (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  actor TEXT NOT NULL,
  action TEXT NOT NULL,
  target_type TEXT NOT NULL,
  target_id TEXT NOT NULL,
  created_at TEXT NOT NULL,
  metadata_json TEXT
);
