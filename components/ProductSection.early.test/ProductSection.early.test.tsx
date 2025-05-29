import ProductSection from '../ProductSection';

// ProductSection.test.tsx
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom";

// ProductSection.test.tsx
// Mocks for dependencies
// 1. MockProductCardProps interface
interface MockProductCardProps {
  product: {
    id: string;
    name: string;
    description: string;
    imageUrl?: string;
    price?: string;
  };
}

// 2. Mock ProductCard component
const MockProductCard = ({ product }: MockProductCardProps) => (
  <div data-testid={`mock-product-card-${product.id}`}>{product.name}</div>
);

// 3. Mock PRODUCTS_DATA
const mockProductsData = [
  {
    id: 'p1',
    name: 'Product One',
    description: 'Description for product one.',
    imageUrl: 'https://example.com/img1.jpg',
    price: '$10.00',
  },
  {
    id: 'p2',
    name: 'Product Two',
    description: 'Description for product two.',
    // imageUrl omitted to test fallback
    // price omitted to test optional
  },
  {
    id: 'p3',
    name: 'Product Three',
    description: 'Description for product three.',
    imageUrl: 'https://example.com/img3.jpg',
    price: '$30.00',
  },
];

// 4. Mock the imports
jest.mock("../../constants", () => ({
  PRODUCTS_DATA: mockProductsData,
}));

jest.mock("../ProductCard", () => ({
  __esModule: true,
  default: (props: MockProductCardProps) => <MockProductCard {...props} />,
}));

describe('ProductSection() ProductSection method', () => {
  // Happy Path Tests
  describe('Happy paths', () => {
    it('renders the section with the correct id and static content', () => {
      // This test ensures the section renders with the provided id and static headings/paragraphs.
      render(<ProductSection id="products-section" />);
      const section = screen.getByRole('region', { hidden: true }) || screen.getByTestId('products-section') || screen.getByText('Our Premium Products').closest('section');
      expect(section).toBeInTheDocument();
      expect(section).toHaveAttribute('id', 'products-section');
      expect(screen.getByText('Our Premium Products')).toBeInTheDocument();
      expect(screen.getByText(/Designed for the professional detailer/i)).toBeInTheDocument();
      expect(screen.getByText('More Than Just Chemicals')).toBeInTheDocument();
      expect(screen.getByText('Come wash with us!')).toBeInTheDocument();
    });

    it('renders a ProductCard for each product in PRODUCTS_DATA', () => {
      // This test ensures that a ProductCard is rendered for each product in PRODUCTS_DATA.
      render(<ProductSection id="products-list" />);
      mockProductsData.forEach((product) => {
        expect(screen.getByTestId(`mock-product-card-${product.id}`)).toBeInTheDocument();
        expect(screen.getByText(product.name)).toBeInTheDocument();
      });
    });

    it('renders the correct static paragraphs and list items', () => {
      // This test ensures all static paragraphs and list items are rendered.
      render(<ProductSection id="static-content" />);
      expect(screen.getByText(/CEARCO is an authorized sales & service center/i)).toBeInTheDocument();
      expect(screen.getByText(/Important Update:/i)).toBeInTheDocument();
      expect(screen.getByText(/We maintain a comprehensive inventory/i)).toBeInTheDocument();
      expect(screen.getByText(/We also offer other specialized products/i)).toBeInTheDocument();
      expect(screen.getByText('For local sales only, we provide:')).toBeInTheDocument();
      expect(screen.getByText('Bleach')).toBeInTheDocument();
      expect(screen.getByText('Tar & Asphalt Remover (T & A 67)')).toBeInTheDocument();
      expect(screen.getByText('Muriatic Acid')).toBeInTheDocument();
    });

    it('renders the correct heading levels for accessibility', () => {
      // This test ensures the correct heading levels are used for accessibility.
      render(<ProductSection id="heading-test" />);
      expect(screen.getByRole('heading', { level: 2, name: 'Our Premium Products' })).toBeInTheDocument();
      expect(screen.getByRole('heading', { level: 3, name: 'More Than Just Chemicals' })).toBeInTheDocument();
    });
  });

  // Edge Case Tests
  describe('Edge cases', () => {
    it('renders correctly when PRODUCTS_DATA is empty', () => {
      // This test ensures the component handles an empty PRODUCTS_DATA array gracefully.
      jest.resetModules();
      jest.doMock('../constants', () => ({
        PRODUCTS_DATA: [],
      }));
      // Re-import after mocking
      const ProductSectionWithEmptyData = require("../ProductSection").default;
      render(<ProductSectionWithEmptyData id="empty-products" />);
      // Should not render any ProductCard
      expect(screen.queryByTestId(/mock-product-card-/)).not.toBeInTheDocument();
      // Static content should still be present
      expect(screen.getByText('Our Premium Products')).toBeInTheDocument();
      expect(screen.getByText('More Than Just Chemicals')).toBeInTheDocument();
    });

    it('renders ProductCard with missing optional fields (imageUrl, price)', () => {
      // This test ensures that ProductCard is rendered even if optional fields are missing.
      render(<ProductSection id="missing-fields" />);
      // Product p2 has no imageUrl or price
      expect(screen.getByTestId('mock-product-card-p2')).toBeInTheDocument();
      expect(screen.getByText('Product Two')).toBeInTheDocument();
    });

    it('renders correctly with a different id prop', () => {
      // This test ensures the section id attribute is set to the provided prop.
      render(<ProductSection id="custom-id" />);
      const section = screen.getByText('Our Premium Products').closest('section');
      expect(section).toHaveAttribute('id', 'custom-id');
    });

    it('renders correctly when product names/descriptions contain special characters', () => {
      // This test ensures special characters in product names/descriptions are rendered.
      const specialProducts = [
        {
          id: 'sp1',
          name: 'Special & Product <One>',
          description: 'Description with "quotes" & <tags>.',
        },
      ];
      jest.resetModules();
      jest.doMock('../constants', () => ({
        PRODUCTS_DATA: specialProducts,
      }));
      const ProductSectionWithSpecial = require("../ProductSection").default;
      render(<ProductSectionWithSpecial id="special-chars" />);
      expect(screen.getByText('Special & Product <One>')).toBeInTheDocument();
      expect(screen.getByText('Description with "quotes" & <tags>.')).toBeInTheDocument();
    });
  });
});