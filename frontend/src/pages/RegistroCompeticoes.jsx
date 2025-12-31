import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function RegistroCompeticoes() {
  const [tamanho, setTamanho] = useState("");
  const [premioDinheiro, setPremioDinheiro] = useState(false);
  const [vagaOutra, setVagaOutra] = useState(false);

  function handleRegistrar() {
    alert("Por enquanto, o cadastro não salva no banco. (Em breve)");
  }

  const labelLocalidade =
    tamanho === "Continental"
      ? "Continente"
      : ["Nacional", "Regional", "Estadual"].includes(tamanho)
      ? "País"
      : "";

  return (
    <div className="max-w-6xl">
      {/* Header */}
      <h1 className="text-3xl md:text-4xl font-semibold tracking-wide">
        Registrar Competições
      </h1>
      <p className="text-sm text-slate-400 mt-2">
        Cadastre campeonatos e torneios.
      </p>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* COLUNA ESQUERDA */}
        <div className="lg:col-span-2 bg-[#0b1220] border border-slate-800 rounded-2xl p-5 space-y-4">
          <Field label="Nome da Competição" placeholder="Digite o nome" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <SelectField
              label="Tamanho"
              value={tamanho}
              onChange={(e) => setTamanho(e.target.value)}
            >
              <option value="" disabled>
                Selecione
              </option>
              <option>Mundial</option>
              <option>Continental</option>
              <option>Nacional</option>
              <option>Regional</option>
              <option>Estadual</option>
            </SelectField>

            <Field
              label={labelLocalidade || "Localidade"}
              placeholder={labelLocalidade || "—"}
              disabled={tamanho === "Mundial" || !labelLocalidade}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <SelectField label="Participantes">
              <option value="" disabled>
                Selecione
              </option>
              <option>Seleções</option>
              <option>Clubes</option>
            </SelectField>

            <SelectField label="Divisão">
              <option value="" disabled>
                Selecione
              </option>
              <option>1ª Divisão</option>
              <option>2ª Divisão</option>
              <option>3ª Divisão</option>
              <option>4ª Divisão</option>
              <option>5ª Divisão</option>
              <option>Sem Divisão</option>
            </SelectField>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <SelectField label="Tipo">
              <option value="" disabled>
                Selecione
              </option>
              <option>Torneio</option>
              <option>Liga</option>
              <option>Outro</option>
            </SelectField>

            <Field
              label="Número de Participantes"
              placeholder="Ex.: 20"
              type="number"
            />
          </div>
        </div>

        {/* COLUNA DIREITA */}
        <div
        className="
            bg-[#0b1220]
            border border-slate-800
            rounded-2xl
            p-6
            flex flex-col
            space-y-6
        "
        >
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-200 text-center">
            Premiação
        </h2>

        <Checkbox label="Troféu" />

        <Checkbox
            label="Premiação em dinheiro"
            onChange={(e) => setPremioDinheiro(e.target.checked)}
        />

        {premioDinheiro && (
            <Field
            label="Valor monetário"
            placeholder="Ex.: 500000"
            type="number"
            />
        )}

        <Checkbox
            label="Garante vaga em outra competição"
            onChange={(e) => setVagaOutra(e.target.checked)}
        />

        {vagaOutra && (
            <SelectField label="Competição garantida">
            <option value="" disabled>
                Selecione a competição
            </option>
            </SelectField>
        )}
        </div>
      </div>

      {/* BOTÃO */}
      <div className="mt-6 flex justify-end">
        <button
          type="button"
          onClick={handleRegistrar}
          className="px-8 py-3 rounded-xl bg-emerald-500/20 text-emerald-200 border border-emerald-500/30 hover:bg-emerald-500/25 transition"
        >
          Registrar
        </button>
      </div>
    </div>
  );
}

/* ---------- Componentes auxiliares ---------- */

function Field({ label, placeholder, type = "text", disabled = false }) {
  return (
    <div>
      <label className="block text-sm text-slate-300 font-medium mb-2">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        className="
          w-full bg-[#0f172a]
          border border-slate-800
          rounded-xl py-3 px-4
          text-slate-200 placeholder:text-slate-600
          focus:outline-none focus:border-emerald-500/60
          focus:ring-1 focus:ring-emerald-500/20
          disabled:opacity-40 disabled:cursor-not-allowed
          transition
        "
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
        className="
          appearance-none w-full
          bg-[#0f172a]
          border border-slate-800
          rounded-xl py-3 pl-4 pr-10
          text-slate-200
          focus:outline-none focus:border-emerald-500/60
          focus:ring-1 focus:ring-emerald-500/20
          transition
        "
      >
        {children}
      </select>

      <ChevronDown className="w-4 h-4 text-slate-400 absolute right-4 top-[46px] pointer-events-none" />
    </div>
  );
}

function Checkbox({ label, onChange }) {
  return (
    <label className="flex items-center gap-3 text-sm text-slate-300 cursor-pointer">
      <input
        type="checkbox"
        onChange={onChange}
        className="
          appearance-none
          w-5 h-5
          rounded-md
          border border-slate-600
          bg-[#0f172a]
          flex items-center justify-center
          checked:bg-emerald-500
          checked:border-emerald-500
          checked:after:content-['✓']
          checked:after:text-black
          checked:after:text-sm
          checked:after:font-bold
          transition
        "
      />
      {label}
    </label>
  );
}