"use client"

import { Modal } from "@/components/site/modal"
import { Disclaimer } from "@/components/site/disclaimer"

const rows = [
  { size: "XS", waist: "24–26\"", hip: "34–36\"", height: "5'0\"–5'3\"" },
  { size: "S", waist: "27–29\"", hip: "37–39\"", height: "5'2\"–5'5\"" },
  { size: "M", waist: "30–32\"", hip: "40–42\"", height: "5'4\"–5'7\"" },
  { size: "L", waist: "33–35\"", hip: "43–45\"", height: "5'6\"–5'9\"" },
  { size: "XL", waist: "36–39\"", hip: "46–48\"", height: "5'8\"–5'11\"" },
  { size: "2XL", waist: "40–43\"", hip: "49–51\"", height: "5'10\"–6'2\"" },
]

export function SizeGuide({
  open,
  onClose,
}: {
  open: boolean
  onClose: () => void
}) {
  return (
    <Modal open={open} onClose={onClose} title="Fit & sizing guide">
      <p className="text-sm leading-relaxed text-muted-foreground">
        Compression should feel snug and supportive but never painful. Measure
        yourself and size up if you&apos;re between sizes or new to compression.
      </p>
      <div className="mt-4 overflow-hidden rounded-xl border border-border">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-muted text-left">
              <th className="px-3 py-2.5 font-semibold text-foreground">Size</th>
              <th className="px-3 py-2.5 font-semibold text-foreground">Waist</th>
              <th className="px-3 py-2.5 font-semibold text-foreground">Hip</th>
              <th className="px-3 py-2.5 font-semibold text-foreground">Height</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {rows.map((row) => (
              <tr key={row.size}>
                <td className="px-3 py-2.5 font-medium text-foreground">
                  {row.size}
                </td>
                <td className="px-3 py-2.5 text-muted-foreground">{row.waist}</td>
                <td className="px-3 py-2.5 text-muted-foreground">{row.hip}</td>
                <td className="px-3 py-2.5 text-muted-foreground">{row.height}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-4">
        <Disclaimer variant="inline">
          Measurements are a guide. If you have specific medical sizing needs,
          consult your healthcare provider.
        </Disclaimer>
      </div>
    </Modal>
  )
}
