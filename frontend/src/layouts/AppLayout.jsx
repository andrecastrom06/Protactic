import { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { fetchNavigation } from "../services/navigation";

export default function AppLayout() {
  const [nav, setNav] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;

    async function load() {
      try {
        const data = await fetchNavigation();
        if (mounted) setNav(data);
      } catch (err) {
        console.error("Erro ao carregar navegação:", err);
        
      } finally {
        if (mounted) setLoading(false);
      }
    }

    load();
    return () => (mounted = false);
  }, []);

  if (loading) return <div>Carregando...</div>;
  if (!nav) return <div>Sem navegação (falha ao carregar)</div>;

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      {/* Sidebar */}
      <aside style={{ width: 240, padding: 16, borderRight: "1px solid #ddd" }}>
        <div style={{ marginBottom: 16 }}>
          <strong>PROTACTIC</strong>
          <div style={{ fontSize: 12 }}>{nav.user.username}</div>
        </div>

        <nav style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          {nav.items.map((item) => (
            <NavLink
              key={item.key}
              to={item.path}
              style={({ isActive }) => ({
                textDecoration: "none",
                fontWeight: isActive ? "700" : "400",
              })}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>

      {/* Conteúdo */}
      <main style={{ flex: 1, padding: 16 }}>
        <Outlet />
      </main>
    </div>
  );
}