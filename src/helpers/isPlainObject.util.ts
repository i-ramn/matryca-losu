export function isPlainObject(
  entity: unknown
): entity is Record<string, unknown> {
  return (
    typeof entity === "object" &&
    entity != null &&
    Object.prototype.toString.call(entity) === "[object Object]"
  );
}
