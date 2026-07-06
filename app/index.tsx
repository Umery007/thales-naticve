import { useState } from "react";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Image } from "expo-image";
import { MaterialIcons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const COLORS = {
  primary: "#805062",
  onPrimary: "#ffffff",
  primaryContainer: "#f8bbd0",
  onPrimaryContainer: "#76485a",
  surface: "#fff8f6",
  surfaceContainerLowest: "#ffffff",
  surfaceContainer: "#feeae4",
  onSurface: "#231916",
  onSurfaceVariant: "#504447",
  outlineVariant: "#d4c2c6",
  error: "#ba1a1a",
};

const CHIPS = ["Todos", "Bolos", "Tortas", "Sem Açúcar", "Sazonais"];

const PRODUCTS = [
  {
    id: 1,
    name: "Bolo de Veludo Negro",
    desc: "Massa intensa de cacau 70% com recheio de frutas vermelhas.",
    price: "R$ 185,00",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAFH8DGWJfv2cCZBLaB4ZIkd2dzNulmhxoDsRzWlRkwkqTwvZU-35dvLb1DHsDZqd8PTybJBDaROolkDB07qr48pNPFts-p783uqMFhBf8bFppWRZGejU-Ot3mIbs0SLHzCbpoDfrFNmuv9xAnQdIUyn-_TF1__nRosx2Q-RLuJ_fiTngW8Vsig3AQTP4Von1HpgI8WhKK9ZvLC8uBSO1LW_wACsul_iB3mOzM5xbgSQLzxUK-GMCbG9R9VJCzYvFGnVw_nhh7kZ60",
  },
  {
    id: 2,
    name: "Torta Citron d'Or",
    desc: "Creme de limão siciliano com merengue suíço maçaricado.",
    price: "R$ 24,00",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBA3tfWDdYm9UG01Q62qFpkkjo4Mt9C561V1z4xQAme3_L1sXq9QhcyjBE-USTXMSGxykHsMNJDN2IXyFmkKm1I191rbbeoHodMHHKoE-5eLW4oenvbVWtZq7Tx8YKnyxtBwSuG6fydu3pJndxHwqGiNKKJ_ukIhiNnP6pp3z6TcD6o3nomXyhbJP6INg_dMOWzURq_Z-Tg4t7lZb60pRmt3LEDl6wcKgbK3_ERqrj-VWCrK4AkjNZCageO38LnxBUeJQJe_7yLz44",
  },
  {
    id: 3,
    name: "Cheesecake de Pistache",
    desc: "Base crocante de amêndoas com creme de pistache iraniano.",
    price: "R$ 28,00",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAW8exJ8xhriEFQ-zVd7qVKFYTkFztJ_6GnVMg7GAvILJEA7R2uURZNA_a82-8r8ZwgDn2MKb4tSS0P3xTkGMITCcAZdrbQw2OxN7r6KJXwbsbsy_L7pdBIeq1oX6E9YIUq0Ydavneo1qtY_QYLLbtD_gkQAGCWFdQrg5pFuIkkFdaumiAJMxCBr6_TSWdkWRlcz8zQeBg5M_0ISrB666fpoqQffMgRJbxzf_RrqysgDJWPxQOD7KT9Vz2JBgUA8HzceuvpQiWLF88",
  },
  {
    id: 4,
    name: "Caixa de Trufas (6 un.)",
    desc: "Seleção de trufas artesanais com chocolate belga Callebaut.",
    price: "R$ 45,00",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDBTwqyGW6Ca-hUIYtJJcdUmRO2R02vZJ5S3Xhkceg_JPbTl0DNW44Mc_SusTbqq3QgZYpSAVSVVrc9Bo29pDakwuQejeYBGw2RUQEDKGyTVTcrAN1Jz3XIdAEj-ETaP560ZYkchcqw7R9sQAkN9tbgXnnm6DIYyKHah--Kj6pJ7twPXfvGe7Dan2Scu2xLMQwSP2iGyJ0iWRgwgsBtIiU75pzsjAiqcyfYrMqEfVnyQrvraYu2fRA5THpQBDDabYiaW45i_EvYmkY",
  },
  {
    id: 5,
    name: "Mousse Zero Culpa",
    desc: "Mousse de chocolate 80% cacau, adoçado naturalmente com stevia.",
    price: "R$ 19,00",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA6dJfuZtvFadOGYQfhg35IroH_IxcTOiiZ3QvaK3179xYUDg45LFekzUrlsN5lb74Jv6wOtADD42_IyDf9SYQ5xnGKbB_Wd5w0mxf_3XsvKrmtMcF1k_bvshDtPjJOM_vYDbTSvAok30MVB6M-I73nM2rq2foUvPUMQr8lv2Co8PVwzb1OEa7alJKkNiXNEELRS7iW7sy42_yFyvAmos2gLhCEyVNdn8rnlqnVMicDR0OqpvmHCBJ46klA2oTt0sA4hkpzujfY3mk",
  },
  {
    id: 6,
    name: "Red Velvet Premium",
    desc: "Camadas aveludadas com autêntico frosting de cream cheese.",
    price: "R$ 160,00",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuASOLsSv6LBaVjj1F2d6J5adiK60idB4ri9UuyGXN0OK535C-v8F676eWGqOX-2gATYhnOXfAAmbaw1qMf448ozFu2NGWevyqdikvajqY3QlkL7W03VAetD4tizK5tGEiaWlwAAIBQCReQI6hknVqKlvuG00TajYBxliP7FMjuzkKKH0q3GGcCjigVsOCIKyv3TMCUUoIzfKvLfLS8Rv1hyJLIaiEV63P11YMnTjUn-NHTVu0Z9ZQcTWwbbRT6FGOXQzAeLmpKfSXU",
  },
];

function Chip({
  label,
  active,
  onPress,
}: {
  label: string;
  active: boolean;
  onPress: () => void;
}) {
  return (
    <Pressable
      style={[styles.chip, active && styles.chipActive]}
      onPress={onPress}
    >
      <Text style={[styles.chipLabel, active && styles.chipLabelActive]}>
        {label}
      </Text>
    </Pressable>
  );
}

function ProductCard({
  name,
  desc,
  price,
  image,
}: {
  name: string;
  desc: string;
  price: string;
  image: string;
}) {
  const [favorited, setFavorited] = useState(false);

  return (
    <View style={styles.card}>
      <View style={styles.cardImageWrap}>
        <Image source={{ uri: image }} style={styles.cardImage} />
        <Pressable
          style={styles.favButton}
          onPress={() => setFavorited(!favorited)}
        >
          <MaterialIcons
            name="favorite"
            size={18}
            color={favorited ? COLORS.error : COLORS.primary}
          />
        </Pressable>
      </View>
      <View style={styles.cardBody}>
        <Text style={styles.cardName} numberOfLines={1}>
          {name}
        </Text>
        <Text style={styles.cardDesc} numberOfLines={2}>
          {desc}
        </Text>
        <View style={styles.cardFooter}>
          <Text style={styles.cardPrice}>{price}</Text>
          <Pressable style={styles.cartButton}>
            <MaterialIcons
              name="add-shopping-cart"
              size={18}
              color={COLORS.onPrimaryContainer}
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
}

export default function Home() {
  const insets = useSafeAreaInsets();
  const [activeChip, setActiveChip] = useState("Todos");

  return (
    <View style={[styles.root, { paddingTop: insets.top }]}>
      <View style={styles.topBar}>
        <View style={styles.topBarLeft}>
          <MaterialIcons name="cake" size={24} color={COLORS.primary} />
          <Text style={styles.topBarTitle}>Doce Inspiração</Text>
        </View>
        <MaterialIcons
          name="search"
          size={24}
          color={COLORS.onSurfaceVariant}
        />
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.chipRow}
        contentContainerStyle={styles.chipContent}
      >
        {CHIPS.map((chip) => (
          <Chip
            key={chip}
            label={chip}
            active={activeChip === chip}
            onPress={() => setActiveChip(chip)}
          />
        ))}
      </ScrollView>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.grid}>
          {PRODUCTS.map((p) => (
            <ProductCard key={p.id} {...p} />
          ))}
        </View>
      </ScrollView>

      <View style={[styles.bottomBar, { paddingBottom: insets.bottom + 4 }]}>
        <Pressable style={styles.navItem}>
          <MaterialIcons name="home" size={24} color={COLORS.onSurfaceVariant} />
          <Text style={styles.navLabel}>Início</Text>
        </Pressable>
        <Pressable style={[styles.navItem, styles.navItemActive]}>
          <MaterialIcons
            name="menu-book"
            size={24}
            color={COLORS.onPrimaryContainer}
          />
          <Text style={[styles.navLabel, styles.navLabelActive]}>Cardápio</Text>
        </Pressable>
        <Pressable style={styles.navItem}>
          <MaterialIcons
            name="person"
            size={24}
            color={COLORS.onSurfaceVariant}
          />
          <Text style={styles.navLabel}>Perfil</Text>
        </Pressable>
        <Pressable style={styles.navItem}>
          <View>
            <MaterialIcons
              name="shopping-bag"
              size={24}
              color={COLORS.onSurfaceVariant}
            />
            <View style={styles.badge}>
              <Text style={styles.badgeText}>2</Text>
            </View>
          </View>
          <Text style={styles.navLabel}>Carrinho</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: COLORS.surface,
  },

  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    height: 64,
    backgroundColor: "rgba(255,248,246,0.8)",
  },
  topBarLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  topBarTitle: {
    fontSize: 24,
    fontWeight: "800",
    color: COLORS.primary,
    fontFamily: "Epilogue",
  },

  chipRow: {
    maxHeight: 48,
  },
  chipContent: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    gap: 12,
    paddingVertical: 8,
  },
  chip: {
    paddingHorizontal: 24,
    paddingVertical: 8,
    borderRadius: 9999,
    backgroundColor: COLORS.surfaceContainer,
    borderWidth: 1,
    borderColor: COLORS.outlineVariant,
  },
  chipActive: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  chipLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: COLORS.onSurfaceVariant,
    letterSpacing: 0.7,
  },
  chipLabelActive: {
    color: COLORS.onPrimary,
  },

  scroll: {
    flex: 1,
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 32,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 16,
  },

  card: {
    width: "47%",
    backgroundColor: COLORS.surfaceContainerLowest,
    borderRadius: 12,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "rgba(35,25,22,0.05)",
  },
  cardImageWrap: {
    aspectRatio: 1,
    overflow: "hidden",
    backgroundColor: COLORS.surfaceContainer,
  },
  cardImage: {
    width: "100%",
    height: "100%",
  },
  favButton: {
    position: "absolute",
    top: 8,
    right: 8,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "rgba(255,248,246,0.9)",
    alignItems: "center",
    justifyContent: "center",
  },
  cardBody: {
    padding: 12,
  },
  cardName: {
    fontSize: 14,
    fontWeight: "600",
    color: COLORS.onSurface,
    letterSpacing: 0.7,
  },
  cardDesc: {
    fontSize: 12,
    color: COLORS.onSurfaceVariant,
    marginTop: 4,
    lineHeight: 16,
  },
  cardFooter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 12,
  },
  cardPrice: {
    fontSize: 14,
    fontWeight: "600",
    color: COLORS.primary,
  },
  cartButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: COLORS.primaryContainer,
    alignItems: "center",
    justifyContent: "center",
  },

  bottomBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingTop: 8,
    paddingHorizontal: 16,
    backgroundColor: "rgba(255,248,246,0.9)",
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  navItem: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
    paddingVertical: 4,
  },
  navItemActive: {
    backgroundColor: COLORS.primaryContainer,
    borderRadius: 9999,
    paddingHorizontal: 24,
    paddingVertical: 4,
  },
  navLabel: {
    fontSize: 14,
    fontWeight: "600",
    color: COLORS.onSurfaceVariant,
    letterSpacing: 0.7,
  },
  navLabelActive: {
    color: COLORS.onPrimaryContainer,
  },
  badge: {
    position: "absolute",
    top: -4,
    right: -4,
    width: 16,
    height: 16,
    borderRadius: 8,
    backgroundColor: COLORS.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  badgeText: {
    fontSize: 10,
    color: COLORS.onPrimary,
    fontWeight: "700",
  },
});