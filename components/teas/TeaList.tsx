import Stack from '@mui/material/Stack';
import Button from "@mui/material/Button";

import { getTeas } from '@/server/teas/teas';
import { Tea } from '@/models/teas/teas.models';

export default async function TeaList() {
  const teas: Tea[] = await getTeas();

  return (
    <section className="flex h-full w-full flex-col gap-y-4">
      { teas.map((tea) => {
        return (
          <Stack key={ tea.name }>
            <section>
              <p>{ tea.display }</p>
            </section>
          </Stack>
        );
      }) }
    </section>
  );
}
