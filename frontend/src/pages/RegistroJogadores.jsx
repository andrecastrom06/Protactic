import { useMemo, useState } from "react";
import { ChevronDown, ImagePlus } from "lucide-react";

export default function RegistroJogadores() {
  const posicoes = useMemo(
    () => [
      "Goleiro",
      "Zagueiro",
      "Lateral Esquerdo",
      "Lateral Direito",
      "Volante",
      "Meio-campista",
      "Meia Atacante",
      "Ponta Esquerda",
      "Ponta Direita",
      "Centroavante",
    ],
    []
  );

  const pernas = useMemo(() => ["Destro", "Canhoto", "Ambidestro"], []);

  const [fotoPreview, setFotoPreview] = useState(null);

  function handlePickImage(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setFotoPreview(url);
  }

  function handleRegistrar() {
    alert("Por enquanto, o cadastro não salva no banco. (Em breve)");
}

  return (
    <div className="max-w-5xl">
      {/* Header padrão */}
      <h1 className="text-3xl md:text-4xl font-semibold tracking-wide">
        Registrar Jogadores
      </h1>
      <p className="text-sm text-slate-400 mt-2">
        Preencha os dados do atleta.
      </p>

      {/* Conteúdo */}
      <div className="mt-8 grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-6">
        {/* Coluna Esquerda */}
        <div className="bg-[#0b1220] border border-slate-800 rounded-2xl p-5">
          {/* Foto */}
          <div className="flex flex-col items-center">
            <div className="w-40 h-40 rounded-full border-2 border-slate-700 overflow-hidden bg-[#0f172a] flex items-center justify-center">
              {fotoPreview ? (
                <img
                  src={fotoPreview}
                  alt="Prévia"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="flex flex-col items-center gap-2 text-slate-400">
                  <ImagePlus className="w-7 h-7" />
                  <span className="text-sm font-semibold tracking-wide">
                    FOTO
                  </span>
                </div>
              )}
            </div>

            {/* Botão escolher da galeria (sem backend, só preview local) */}
            <label className="mt-4 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-[#0f172a] border border-slate-800 text-slate-200 hover:bg-slate-800/40 transition cursor-pointer">
              Escolher da Galeria
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handlePickImage}
              />
            </label>
          </div>

          {/* Inputs laterais: Idade/Peso/Altura */}
          <div className="mt-6 space-y-4">
            <Field label="Idade" placeholder="Ex.: 19" type="number" />
            <Field label="Peso" placeholder="Ex.: 72 (kg)" type="number" />
            <Field label="Altura" placeholder="Ex.: 1.78 (m)" type="text" />
            <Field label="Nacionalidade" placeholder="Ex.: Brasileiro" />
          </div>
        </div>

        {/* Coluna Direita */}
        <div className="space-y-6">
          {/* Top fields */}
          <div className="bg-[#0b1220] border border-slate-800 rounded-2xl p-5 space-y-4">
            <Field label="Nome do Jogador" placeholder="Digite nome e sobrenome" />
            <Field label="CPF" placeholder="000.000.000-00" />

            {/* Select Clube (sem opções por enquanto) */}
            <SelectField label="Clube" value="" onChange={() => {}}>
              <option value="" disabled>
                Não há clubes registrados
              </option>
            </SelectField>
          </div>

          {/* Box Dados do Jogador */}
          <div className="bg-[#0b1220] border border-slate-800 rounded-2xl p-5">
            <div className="text-center">
              <div className="inline-flex px-4 py-2 rounded-xl bg-[#0f172a] border border-slate-800 text-slate-200 font-semibold">
                Dados de Jogador
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 items-end">
              {/* Posição */}
              <SelectField label="Posição" defaultValue="">
                <option value="" disabled>
                  Selecione
                </option>
                {posicoes.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </SelectField>

              {/* Perna */}
              <SelectField label="Perna" defaultValue="">
                <option value="" disabled>
                  Selecione
                </option>
                {pernas.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </SelectField>
            </div>

            <div className="mt-6 text-slate-300">
              <span className="font-semibold">Atributos:</span>{" "}
              <span className="italic text-slate-400">Em Breve</span>
            </div>
          </div>

          {/* Botão Registrar (desabilitado por enquanto) */}
          <div className="flex justify-end">
            <button
                type="button"
                onClick={handleRegistrar}
                className="px-8 py-3 rounded-xl bg-emerald-500/20 text-emerald-200 border border-emerald-500/30 hover:bg-emerald-500/25 transition"
                >
                Registrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Componentes auxiliares ---------- */

function Field({ label, placeholder, type = "text" }) {
  return (
    <div>
      <label className="block text-sm text-slate-300 font-medium mb-2">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full bg-[#0f172a] border border-slate-800 rounded-xl py-3 px-4 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/20 transition"
      />
    </div>
  );
}

function SelectField({ label, children, ...props }) {
  return (
    <div className="relative">
      <label className="block text-sm text-slate-300 font-medium mb-2">
        {label}
      </label>

      <select
        {...props}
        className="appearance-none w-full bg-[#0f172a] border border-slate-800 rounded-xl py-3 pl-4 pr-10 text-slate-200 focus:outline-none focus:border-emerald-500/60 focus:ring-1 focus:ring-emerald-500/20 transition"
      >
        {children}
      </select>

      <ChevronDown className="w-4 h-4 text-slate-400 absolute right-4 top-[46px] pointer-events-none" />
    </div>
  );
}